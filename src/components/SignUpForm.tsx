"use client"

import { siteConfig } from "@/config/site"

export function SignUpForm() {
  return (
    <form action={`https://formsubmit.co/${siteConfig.contact.formSubmitEmail}`} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value={`New signup from ${siteConfig.name}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: "none" }} />

      <div>
        <label htmlFor="name" className="hof-label">
          Full Name
        </label>
        <input type="text" name="name" id="name" required className="hof-input" />
      </div>

      <div>
        <label htmlFor="email" className="hof-label">
          Email address
        </label>
        <input type="email" name="email" id="email" required className="hof-input" />
      </div>

      <div>
        <label htmlFor="phone" className="hof-label">
          Phone Number
        </label>
        <input type="tel" name="phone" id="phone" className="hof-input" />
      </div>

      <div>
        <label htmlFor="interests" className="hof-label">
          I&apos;m interested in helping with...
        </label>
        <select id="interests" name="interests" className="hof-select">
          <option>General Volunteering</option>
          <option>Community Cleanups</option>
          <option>Event Planning</option>
          <option>Fundraising</option>
          <option>Canvassing</option>
        </select>
      </div>

      <button type="submit" className="hof-btn hof-btn-gold w-full">
        Sign Up
      </button>
    </form>
  )
}
