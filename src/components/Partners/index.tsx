import React, { useMemo } from "react";
import "./style.scss";

import airbus from "../../assets/Partners/boing.svg";
import airmobil from "../../assets/Partners/airbus.png";


function usePartnerLogos() {
  const { row1, row2 } = useMemo(() => {
    const modules = import.meta.glob(
      "../../assets/Partners/*.{svg,png,jpg,jpeg,webp}",
      { eager: true, as: "url" }
    ) as Record<string, string>;

    const all = Object.values(modules).filter(
      (url) => !/airbus\.(png|jpe?g|svg|webp)$/i.test(url)
    );

    all.sort((a, b) => a.localeCompare(b));

    const mid = Math.ceil(all.length / 2);
    return { row1: all.slice(0, mid), row2: all.slice(mid) };
  }, []);

  return { row1, row2 };
}

const LogoRow: React.FC<{
  files: string[];
  direction?: "left" | "right";
  speedSec?: number;
  size?: number;
}> = ({ files, direction = "left", speedSec = 28, size = 28 }) => {
  const doubled = useMemo(() => files.concat(files), [files]);




  return (
    <div className="partners__marquee">
      <ul
        className={`partners__track ${direction === "right"
          ? "partners__track--right"
          : "partners__track--left"
          }`}
        style={{ ["--speed" as any]: `${speedSec}s` }}
      >
        {doubled.map((src, i) => {
          const name =
            src.split("/").pop()?.replace(/\.\w+$/, "").replace(/[-_]/g, " ") ??
            `logo-${i}`;
          return (
            <li key={`${src}-${i}`} className="partners__item">
              <img
                src={src}
                alt={name}
                className="partners__logo"
                style={{ height: size }}
                loading="lazy"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Partners: React.FC = () => {
  const { row1, row2 } = usePartnerLogos();

  return (
    <section className="partners ">
      <div className="container">
        <div className="partners__airliners">
          {/* Десктопная версия (airbus) */}
          <img
            src={airbus}
            alt="airplane"
            draggable={false}
            className="hidden md:block partners__plane"
          />

          {/* Мобильная версия (airmobil) */}
          <img
            src={airmobil}
            alt="airplane mobile"
            className="block md:hidden partners__moboleair"
          />



          <h2 className="partners__title">Наши партнёры</h2>
          <p className="partners__text">
            Благодаря нашему широкому сотрудничеству с более чем 200 ведущими
            авиакомпаниями по всему миру, мы соединим вас с любым пунктом
            назначения между странами и городами.
          </p>
        </div>


        <div className="partners__rows">
          <LogoRow files={row1} direction="right" speedSec={30} size={28} />
          <LogoRow files={row2} direction="left" speedSec={26} size={28} />
        </div>
      </div>


    </section>
  );
};

export default Partners;
