import "./Pagination.css";

export default function Pagination({ set_current_page, pages }) {
  return (
    <section className="pagination_section">
      {pages.map((page) => (
        <span key={page} onClick={() => set_current_page(page + 1)}>
          {page + 1}
        </span>
      ))}
    </section>
  );
}
