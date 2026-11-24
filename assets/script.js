// Portfolio website behavior
// Content can be extended in ../data/portfolio.json.

document.getElementById('year').textContent = new Date().getFullYear();


async function loadPortfolioData() {
  try {
    const response = await fetch('data/portfolio.json');
    if (!response.ok) return;
    const data = await response.json();
    if (data.pageTitle) document.title = data.pageTitle;
    if (data.contactEmail) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.href = `mailto:${data.contactEmail}`;
      });
    }
  } catch (error) {
    console.warn('portfolio.json could not be loaded locally. This is normal when opening the file directly without a local server.', error);
  }
}

loadPortfolioData();
