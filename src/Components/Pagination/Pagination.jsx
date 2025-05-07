import "./Pagination.css";

export default function Pagination({ set_current_page, pages }) {
  return (
    <section className="pagination_section">
      {pages.map((page) => (
        <button type="button" key={page} onClick={() => set_current_page(page + 1)}>
          {page + 1}
        </button>
      ))}
    </section>
  );
}
