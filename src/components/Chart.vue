<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

import { Doughnut, Line } from "vue-chartjs";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

/* =========================
   Doughnut Data
========================= */

const chartData = {
    labels: [
        t("charts.apartments"),
        t("charts.villas"),
        t("charts.commercial"),
        t("charts.administrative"),
    ],

    datasets: [
        {
            data: [45, 25, 20, 10],

            backgroundColor: [
                "#C4974E",
                "#8B5CF6",
                "#0EA5E9",
                "#22C55E",
            ],

            borderWidth: 0,

            borderRadius: 8,

            spacing: 4,
        },
    ],
};

/* =========================
   Doughnut Options
========================= */

const chartOptions = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",

    plugins: {
        legend: {
            position: "left",

            labels: {
                color: "#CBD5E1",

                font: {
                    size: 14,
                    family: "Cairo",
                },

                padding: 20,
            },
        },

        tooltip: {
            backgroundColor: "#071525",

            titleColor: "#fff",

            bodyColor: "#C4974E",

            padding: 12,
        },
    },
};

/* =========================
   Line Data
========================= */

const lineData = {
    labels: [
        t("charts.months.jan"),
        t("charts.months.feb"),
        t("charts.months.mar"),
        t("charts.months.apr"),
        t("charts.months.may"),
        t("charts.months.jun"),
    ],

    datasets: [
        {
            label: t("charts.salesGrowth"),

            data: [20, 35, 28, 45, 60, 80],

            borderColor: "#C4974E",

            backgroundColor: "rgba(196,151,78,0.2)",

            tension: 0.4,

            fill: true,

            pointRadius: 5,

            pointBackgroundColor: "#C4974E",
        },
    ],
};

/* =========================
   Line Options
========================= */

const lineOptions = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
        legend: {
            labels: {
                color: "#fff",

                font: {
                    family: "Cairo",
                },
            },
        },
    },

    scales: {
        x: {
            ticks: {
                color: "#CBD5E1",
            },

            grid: {
                color: "rgba(255,255,255,0.05)",
            },
        },

        y: {
            ticks: {
                color: "#CBD5E1",
            },

            grid: {
                color: "rgba(255,255,255,0.05)",
            },
        },
    },
};
</script>

<template>
    <!-- Charts -->
    <div class="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-8 bg-[var(--color-boxes-pagedetails)]
      pb-23
    ">
        <!-- Doughnut -->
        <div class="
        mainCard
        p-6
        h-[380px]
      ">
            <div class="flex items-center justify-between mb-6">
                <h2 class="sectionTitle  text-[var(--color-title)]">
                    {{ $t("charts.realEstateRatio") }}
                </h2>

                <span class="smallText  text-[var(--color-text)]">
                    {{ $t("charts.lastUpdate") }}
                </span>
            </div>

            <Doughnut :data="chartData" :options="chartOptions" />
        </div>

        <!-- Line -->
        <div class="
        mainCard
        p-6
        h-[380px]
      ">
            <div class="flex items-center justify-between mb-6">
                <h2 class="sectionTitle text-[var(--color-title)]">
                    {{ $t("charts.salesGrowth") }}
                </h2>

                <span class="smallText text-[var(--color-text)]">
                    {{ $t("charts.lastMonths") }}
                </span>
            </div>

            <Line :data="lineData" :options="lineOptions" />
        </div>
    </div>

    <!-- Result Cards -->
    <div class="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-10 
      m-9 bg-[var(--color-boxes-pagedetails)]
    ">
        <!-- Card -->
        <div class="
        mainCard rounded-xl bg-[var(--color-boxs)]
        p-6
      ">
            <p class="smallText text-[var(--color-title)]  mb-3">
                {{ $t("charts.totalProperties") }}
            </p>

            <h2 class="priceText text-[var(--color-primary)]">
                +12K
            </h2>

            <p class="extraSmallText text-[var(--color-text)]  mt-3">
                {{ $t("charts.propertiesGrowth") }}
            </p>
        </div>

        <!-- Card -->
        <div class="
        mainCard rounded-xl bg-[var(--color-boxs)]
        p-6
      ">
            <p class="smallText text-[var(--color-title)]  mb-3">
                {{ $t("charts.salesRate") }}
            </p>

            <h2 class="priceText text-[var(--color-primary)]">
                85%
            </h2>

            <p class="extraSmallText text-[var(--color-text)]  mt-3">
                {{ $t("charts.highestSales") }}
            </p>
        </div>

        <!-- Card -->
        <div class="
        mainCard rounded-xl bg-[var(--color-boxs)] 
        p-6
      ">
            <p class="smallText text-[var(--color-title)]  mb-3">
                {{ $t("charts.newClients") }}
            </p>

            <h2 class="priceText text-[var(--color-primary)]">
                +2.4K
            </h2>

            <p class="extraSmallText text-[var(--color-text)]  mt-3">
                {{ $t("charts.demandGrowth") }}
            </p>
        </div>

        <!-- Card -->
        <div class="
        mainCard rounded-xl bg-[var(--color-boxs)]
        p-6
      ">
            <p class="smallText  text-[var(--color-title)] mb-3">
                {{ $t("charts.investmentReturn") }}
            </p>

            <h2 class="priceText text-[var(--color-primary)]">
                32%
            </h2>

            <p class="extraSmallText text-[var(--color-text)]  mt-3">
                {{ $t("charts.annualReturn") }}
            </p>
        </div>
    </div>
</template>