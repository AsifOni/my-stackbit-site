import { Hero } from '../components/Hero.jsx';
import { Navbar } from '../components/Navbar.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { getPageFromSlug, getPagePaths } from '../utils/content.js';

export async function getStaticPaths() {
  const paths = await getPagePaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = '/' + (params?.slug ?? ['']).join('/');
  const page = await getPageFromSlug(slug);
  return { props: { page } };
}

const componentMap = {
  hero: Hero,
  // stats: Stats,
};

export default function ComposablePage({ page }) {
  console.log('Y0 Y0', page);
  return (
    <>
      <div data-sb-object-id={page.id} className="w-full flex flex-col sm:flex-row flex-wrap flex-grow">
        <Navbar />

        <main role="main" className="w-full flex-grow pt-1">
          <SearchBar />

          <div className='md:container md:mx-auto mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
            <p>Hello man</p>

            {(page.sections || []).map((section, idx) => {
              const Component = componentMap[section.type];
              return <Component key={idx} {...section} />;
            })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
