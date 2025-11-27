const { spawnSync } = require("node:child_process")
const fs = require("node:fs")
const path = require("node:path")
const dotenv = require("dotenv")

function loadEnvFiles() {
  const envFiles = [
    ".env.local",
    ".env",
    ".env.production.local",
    ".env.production",
  ]

  for (const file of envFiles) {
    const filePath = path.resolve(process.cwd(), file)
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath, override: false })
    }
  }
}

function ensurePrismaUrl(env) {
  if (env.PRISMA_DATABASE_URL && env.PRISMA_DATABASE_URL.trim().length > 0) {
    return env.PRISMA_DATABASE_URL
  }

  const fallback =
    env.POSTGRES_PRISMA_URL ||
    env.DATABASE_URL

  if (!fallback) {
    throw new Error(
      "Set PRISMA_DATABASE_URL (or POSTGRES_PRISMA_URL / DATABASE_URL) so Prisma can connect."
    )
  }

  console.log("PRISMA_DATABASE_URL not found. Falling back to available Prisma URL.")

  env.PRISMA_DATABASE_URL = fallback
  return env.PRISMA_DATABASE_URL
}

function ensureDirectUrl(env) {
  if (env.POSTGRES_URL && env.POSTGRES_URL.trim().length > 0) {
    return env.POSTGRES_URL
  }

  const fallback =
    env.POSTGRES_URL_NON_POOLING ||
    env.DATABASE_URL ||
    env.PRISMA_DATABASE_URL ||
    env.POSTGRES_PRISMA_URL

  if (!fallback) {
    throw new Error(
      "Set POSTGRES_URL (or POSTGRES_URL_NON_POOLING / DATABASE_URL) so we can derive a direct connection."
    )
  }

  console.log("POSTGRES_URL not found. Falling back to available Postgres URL for direct connection.")

  env.POSTGRES_URL = fallback
  return env.POSTGRES_URL
}

function runPrismaDbPush() {
  loadEnvFiles()

  const env = { ...process.env }

  try {
    ensurePrismaUrl(env)
    ensureDirectUrl(env)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }

  const prismaCmd = process.platform === "win32" ? "npx.cmd" : "npx"
  const result = spawnSync(prismaCmd, ["prisma", "db", "push"], {
    stdio: "inherit",
    env,
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

runPrismaDbPush()

