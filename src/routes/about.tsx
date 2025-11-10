import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="content-box">
        <h2>📜 About Buffy's Monster Adoption Center</h2>
        <div style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
          <p>
            Welcome to the premier monster adoption service in Sunnydale! Founded in 2003 (or was it 1997? time is weird
            on the Hellmouth), we've been connecting lonely demons, vampires, and other supernatural beings with loving
            homes ever since.
          </p>

          <h3>🌟 Our Mission</h3>
          <p>
            Not all monsters are evil! Many are just misunderstood creatures looking for companionship and a place to
            belong. We believe every being deserves a chance at redemption and a loving home (except for The Master - we
            draw the line somewhere).
          </p>

          <h3>💫 How It Works</h3>
          <ol>
            <li>Browse our extensive catalog of monsters from both Buffy and Angel series</li>
            <li>Read their profiles carefully - know what you're getting into!</li>
            <li>Add your favorites to your adoption cart</li>
            <li>Complete the adoption process (no actual paperwork required!)</li>
            <li>Welcome your new supernatural companion into your life!</li>
          </ol>

          <h3>⚠️ Adoption Requirements</h3>
          <ul>
            <li>Must not be actively trying to open the Hellmouth</li>
            <li>Should have experience with supernatural beings (or at least watched all 7 seasons)</li>
            <li>Access to blood banks, crypt, or dimensional portal (depending on species)</li>
            <li>Understanding that "not evil" doesn't always mean "completely safe"</li>
            <li>Willingness to keep stakes, holy water, and crosses handy (just in case)</li>
          </ul>

          <h3>🎭 Our Story</h3>
          <p>
            After the big battle at the Hellmouth, many demons and vampires found themselves without purpose or
            community. That's when Buffy had the idea - what if we could rehabilitate some of these creatures? Not all
            of them wanted to be evil; some were just following their nature or bad role models (looking at you, Angelus).
          </p>
          <p>
            With help from Willow's magic, Giles' Watcher knowledge, and Xander's construction skills (for building
            monster-proof housing), we created this adoption center. Now creatures from across the Buffyverse can find
            new homes and second chances!
          </p>

          <h3>🏆 Success Stories</h3>
          <p>
            We've successfully placed over 666 monsters in loving homes! Our most popular adoptions include:
          </p>
          <ul>
            <li>Harmony - adopted by 127 families (she keeps coming back to the center though)</li>
            <li>Clem - perfect first monster for beginners</li>
            <li>Lorne - especially popular with musical theater enthusiasts</li>
            <li>Spike - surprisingly high adoption rate despite the danger level</li>
          </ul>
        </div>
      </div>

      <div
        className="content-box"
        style={{ background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.3) 0%, rgba(255, 215, 0, 0.3) 100%)' }}
      >
        <h2>📞 Contact Us</h2>
        <p style={{ fontSize: '1.1em', textAlign: 'center' }}>
          <strong>Email:</strong> <span style={{ color: 'var(--electric-blue)' }}>adopt@buffymonsters.hell</span>
          <br />
          <strong>Phone:</strong> <span style={{ color: 'var(--lime-green)' }}>1-800-HELLMTH</span>
          <br />
          <strong>Location:</strong> <span style={{ color: 'var(--hot-pink)' }}>Sunnydale, CA (if it still exists)</span>
          <br />
          <br />
          <span style={{ fontSize: '0.9em', color: 'var(--warning-yellow)' }}>
            Office hours: Sunset to Sunrise (obviously)
          </span>
        </p>
      </div>

      <div className="content-box" style={{ textAlign: 'center' }}>
        <h2>💝 Testimonials</h2>
        <div style={{ marginTop: '20px' }}>
          <div className="guestbook-entry">
            <p className="guestbook-author">Buffy S.</p>
            <p className="guestbook-message">
              "I never thought I'd say this, but some demons make great companions! Just make sure to read the care
              instructions thoroughly."
            </p>
          </div>
          <div className="guestbook-entry">
            <p className="guestbook-author">Xander H.</p>
            <p className="guestbook-message">
              "Adopted Clem and he's the best roommate ever! Way better than Spike was."
            </p>
          </div>
          <div className="guestbook-entry">
            <p className="guestbook-author">Willow R.</p>
            <p className="guestbook-message">
              "The magical creatures are so cool! Just remember - some require dimensional maintenance."
            </p>
          </div>
        </div>
      </div>

      <div className="under-construction">
        <span className="blink">✨</span> This page is updated whenever we remember to! <span className="blink">✨</span>
      </div>
    </>
  );
}
