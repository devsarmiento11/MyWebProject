import Button from '@/components/atoms/Button';
import SiteImage from '@/components/atoms/SiteImage';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/data/heritage';

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A small guide to Pangasinan</p>
          <h1 id="hero-title">Stories beyond<br />the shoreline.</h1>
          <p className="hero-lede">
            Explore a historic church, a civic landmark, and a dramatic coastal rock formation through a lightweight guide made for mobile browsing.
          </p>
          <div className="hero-actions">
            <Button href="#heritage-sites">Start exploring</Button>
            <span className="hero-count">03 featured places</span>
          </div>
        </div>

        <div className="hero-collage" aria-label="Featured Pangasinan destinations">
          <div className="hero-photo hero-photo--main">
            <SiteImage
              src="/images/manaoag-church.webp"
              alt="Exterior of Manaoag Church in Pangasinan."
              priority
              sizes="(min-width: 900px) 48vw, 92vw"
            />
            <span className="photo-label">Manaoag Church · Manaoag</span>
          </div>
          <div className="hero-photo hero-photo--small">
            <SiteImage
              src="/images/umbrella-rock.webp"
              alt="Umbrella Rock on the coast of Agno, Pangasinan."
              sizes="(min-width: 900px) 17vw, 40vw"
            />
          </div>
          <div className="travel-note" aria-hidden="true">
            <span>Culture · Civic life<br />Natural forms</span>
            <strong>PANGASINAN</strong>
          </div>
        </div>
      </section>

      <section className="places-section" id="heritage-sites" aria-labelledby="heritage-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">Choose a stop</p>
            <h2 id="heritage-title">Three different sides of Pangasinan.</h2>
          </div>
          <p className="section-note">Religious heritage, civic architecture, and a natural coastal landmark.</p>
        </div>
        <HeritageGrid sites={heritageSites} />
      </section>

      <section className="story-section" id="about" aria-labelledby="about-title">
        <div className="story-copy">
          <p className="eyebrow eyebrow--light">Why this guide exists</p>
          <h2 id="about-title">Local places, presented simply.</h2>
          <p>
            This version of the Pangasinan Heritage Digital Showcase highlights Manaoag Church, the Pangasinan Provincial Capitol, and Umbrella Rock in Agno. The site keeps the experience clear, responsive, and practical for people using limited mobile data.
          </p>
        </div>
        <div className="story-stats" aria-label="Project highlights">
          <div><strong>03</strong><span>featured places</span></div>
          <div><strong>03</strong><span>heritage types</span></div>
          <div><strong>100%</strong><span>static-ready</span></div>
        </div>
      </section>
    </main>
  );
}
