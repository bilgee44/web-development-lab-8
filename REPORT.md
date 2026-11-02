# Лаб 8 — Харьцуулалт

Хэмжилтийг Лаб 6-ийн фото цомгийн ижил агуулгатай хоёр хуудсанд (6 карт, navbar, validation-тэй form, dark mode товч) хийсэн.

| Үзүүлэлт | Bootstrap 5.3.3 | Tailwind v4.3 |
|---|---|---|
| CSS (raw / gzip) | 227.3 KB / 30.1 KB (`bootstrap.min.css`) + 0.7 KB (`brand.css`) | 13.1 KB / 3.5 KB (`output.css`) |
| JS (raw / gzip) | 78.8 KB / 23.2 KB (`bootstrap.bundle.min.js`) + 1.2 KB (`app.js`) | 1.1 KB / 0.6 KB (`app.js`) |
| CSS + JS нийт (raw / gzip) | 308 KB / 54.3 KB | 14.2 KB / 4.1 KB |
| HTML хэмжээ | 8.9 KB | 10.8 KB |
| Нэг card-ын class тоо | 18 (`col` орно) | 36 |
| Нэг card-ын HTML урт | ~600 тэмдэгт | ~840 тэмдэгт |
| Lighthouse Performance | 93 | 100 |
| Lighthouse Accessibility | 100 | 100 |
| Lighthouse Best Practices | 100 | 100 |
| Lighthouse SEO | 100 | 100 |
| FCP / LCP / TBT / CLS | 2.1 s / 2.9 s / 0–120 ms / 0 | 0.8 s / 1.3 s / 0–40 ms / 0 |
| Lighthouse-ийн нийт ачаалал | 388 KiB | 96 KiB |

**Хэмжилтийн нөхцөл.** Lighthouse (mobile, simulated throttling) хуудас бүрийг 3 удаа ажиллуулсан; оноо 3 удаа адил, FCP/LCP/TBT-ийн завсрыг хүснэгтэд оруулсан. Локал HTTP сервер (шахалтгүй) дээр, түр зургууд (~14 KB) ашигласан. Bootstrap-ийн CDN-тэй ижил 5.3.3 файлыг локалаас үйлчилсэн тул бодит CDN дээр сүлжээний хоцролт нэмэгдэж болно. Өөрийн зураг, GitHub Pages дээр Chrome DevTools → Lighthouse-аар дахин хэмжиж, хүснэгтийг шинэчилнэ үү.

## Дүгнэлт

Bootstrap нь navbar-ын collapse, form validation, grid зэрэг бэлэн компонентуудтай тул HTML богино (нэг card 18 класс) бөгөөд эхлэхэд хурдан боловч бүх сангийн CSS, JS-ийг (шахсан ~54 KB) ачаалдаг тул Lighthouse-ийн Performance оноо 93, LCP 2.9 с болсон. Tailwind нь ашигласан utility-г л build хийдэг тул CSS нь ~3.5 KB (gzip) болж, хуудас илүү хурдан (Performance 100, LCP 1.3 с) боловч нэг card 36 класстай, HTML урт болж, давтагдах бүтцийг компонент болгон гаргахгүй бол уншихад хэцүү. Хоёр арга хүртээмж, SEO-д ижил 100 оноо авсан тул ялгаа нь гол төлөв хэмжээ, хөгжүүлэлтийн хэв маягт байна: Bootstrap нь бэлэн компонент, нэгдсэн загвар хэрэгтэй багийн төсөлд, Tailwind нь өвөрмөц дизайн, бага хэмжээ чухал үед илүү тохиромжтой.
