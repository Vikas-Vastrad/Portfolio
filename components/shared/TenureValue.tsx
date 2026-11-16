"use client";

import { useEffect, useState } from "react";
import { getTenure } from "@/lib/tenure";

type Units = { year: string; years: string; months: string };

export function TenureValue({ since, units }: { since: string; units: Units }) {
  const [tenure, setTenure] = useState<ReturnType<typeof getTenure> | null>(null);

  useEffect(() => {
    const update = () => setTenure(getTenure(since, new Date()));
    update();
    const timer = window.setInterval(update, 60 * 60 * 1000);
    window.addEventListener("focus", update);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", update);
    };
  }, [since]);

  if (!tenure) return <span aria-busy="true">—</span>;
  return (
    <>
      {tenure.years > 0
        ? `${tenure.years}+ ${tenure.years === 1 ? units.year : units.years}`
        : `${tenure.months} ${units.months}`}
    </>
  );
}
