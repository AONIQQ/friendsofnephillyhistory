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

function ensureDirectUrl(env) {
  if (env.POSTGRES_URL_NON_POOLING && env.POSTGRES_URL_NON_POOLING.trim().length > 0) {
    return env.POSTGRES_URL_NON_POOLING
  }

  const fallback =
    env.POSTGRES_PRISMA_URL ||
    env.POSTGRES_URL ||
    env.DATABASE_URL

  if (!fallback) {
    throw new Error(
      "Set POSTGRES_PRISMA_URL (or POSTGRES_URL / DATABASE_URL) so we can derive POSTGRES_URL_NON_POOLING."
    )
  }

  console.log(
    "POSTGRES_URL_NON_POOLING not found. Falling back to available Postgres URL for direct connection."
  )

  env.POSTGRES_URL_NON_POOLING = fallback
  return env.POSTGRES_URL_NON_POOLING
}

function runPrismaDbPush() {
  loadEnvFiles()

  const env = { ...process.env }

  try {
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

