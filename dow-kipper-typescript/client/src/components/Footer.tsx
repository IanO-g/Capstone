import React, { useState } from "react";

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

    const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(`Subscribed with email: ${email}`);
      setEmail("");
    };

    const handleContact = () => {
      console.log("Contact form submitted");
    };

  return (
    <div>
      <footer className="my-8">
        <div className="cards grid grid-cols-3 gap-4">
          <div className="card p-4 rounded border border-black ml-4">
            <h3 className="font-semibold">About:</h3>
            <p className="">
              Discover Dow Kipper, your platform for trading cards and
              collectibles. Explore a vast range of items, trade with fellow
              enthusiasts, and stay informed with real-time data. Unleash your
              passion for collecting and elevate your collecting experience with
              Dow Kipper.
            </p>
          </div>
          <div className="card p-4 rounded border border-black">
            <h3 className="font-semibold">Join Our Community:</h3>
            <p>
              Discover the thrilling world of collectibles and trading cards! Be
              the first to receive exclusive updates, exciting product launches,
              and insider news from Dow Kipper. Join our vibrant community today
              and unlock a world of endless possibilities.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
                className="border-2 border-gray-400 p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="card p-4 rounded border border-black mr-4">
            <h3 className="font-semibold">Partner with Us:</h3>
            <p>
              Are you interested in partnering with us? We'd love to hear from
              you! Please fill out the form below to get in touch with our team.
            </p>
            <form onSubmit={handleContact} className="mt-4">
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 border-gray-400 p-2 rounded w-1/2 mr-2"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="border-2 border-gray-400 p-2 rounded w-1/2"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="border-2 border-gray-400 p-2 rounded w-full mb-2"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded self-start"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
