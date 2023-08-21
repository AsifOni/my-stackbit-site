import { Navbar } from '../components/Navbar.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { getPageFromSlug, getPagePaths } from '../utils/content.js';
import { ComponentRegistry } from '../utils/registry.js';

export async function getStaticPaths() {
  const paths = await getPagePaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = '/' + (params?.slug ?? ['']).join('/');
  const page = await getPageFromSlug(slug);
  return { props: { page }, revalidate: 60 };
}

const componentMap = ComponentRegistry();

export default function ComposablePage({ page }) {
  return (
    <>
      <div data-sb-object-id={page?.id || '1'} className="w-full flex flex-col sm:flex-row flex-wrap flex-grow">
        <Navbar />

        <main role="main" className="w-full flex-grow">
          <SearchBar />

          <div className="md:container md:mx-auto mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            {(page?.sections || []).map((section, idx) => {
              const Component = componentMap[section.type];

              if (!Component) return;
              return (
                <div key={`${section.type}_${idx}`} className="md:container md:mx-auto mx-auto w-full max-w-screen-xl pb-[50px]">
                  <Component {...section} />
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
