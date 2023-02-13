import React from "react";

export default function Footer() {
  return (
    <footer>
      <aside >
        <p>© Belén Miguens | 2022</p>
      </aside>

      <section className="footer-links">
        <a href="https://www.instagram.com/belenmiguensfoto/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href=" https://wa.me/541162762509">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/in/belen-miguens-39b7b911/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a >
          <i class="bi bi-twitter"></i>
        </a>
        <a href="mailto:miguensbelen@gmail.com">
          <i class="bi bi-envelope-fill"></i>
        </a>
      </section>
    </footer>
  );
}

