"use client";

import { siteConfig } from "@/config/site";

export function SignUpForm() {
    return (
        <form
            action={`https://formsubmit.co/${siteConfig.contact.formSubmitEmail}`}
            method="POST"
            className="space-y-6"
        >
            {/* FormSubmit.co configuration */}
            <input type="hidden" name="_subject" value={`New signup from ${siteConfig.name}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy-800 sm:text-sm sm:leading-6 px-3"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy-800 sm:text-sm sm:leading-6 px-3"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                </label>
                <div className="mt-2">
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy-800 sm:text-sm sm:leading-6 px-3"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="interests" className="block text-sm font-medium leading-6 text-gray-900">
                    I&apos;m interested in helping with...
                </label>
                <div className="mt-2">
                    <select
                        id="interests"
                        name="interests"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-navy-800 sm:text-sm sm:leading-6 px-3"
                    >
                        <option>General Volunteering</option>
                        <option>Community Cleanups</option>
                        <option>Event Planning</option>
                        <option>Fundraising</option>
                        <option>Canvassing</option>
                    </select>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="btn-primary w-full"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
}
