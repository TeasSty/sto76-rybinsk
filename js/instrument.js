(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const reveal = () => {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach((el) => io.observe(el));
  };

  const booking = () => {
    const form = document.getElementById("booking-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const service = String(data.get("service") || "").trim();
      const comment = String(data.get("comment") || "").trim();

      if (!name || !phone || !service) {
        form.reportValidity();
        return;
      }

      const lines = [
        "Заявка с сайта Вибростенд Сервис 76",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Услуга: ${service}`,
      ];
      if (comment) lines.push(`Комментарий: ${comment}`);

      const text = encodeURIComponent(lines.join("\n"));
      window.open(
        `https://vk.ru/write-205098870?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
    });
  };

  reveal();
  booking();
})();
