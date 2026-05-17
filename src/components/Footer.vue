<template>
    <footer class="bg-[var(--color-boxes-pagedetails)] text-[var(--color-title)] pt-20 pb-10 border-t border-white/5"
        >
        <div class="max-w-[1300px] mx-auto px-4">

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/5">

                <!-- Brand -->
                <div class="space-y-6">
                    <h2 class="cardTitle font-black text-[var(--color-primary)]">
                        {{ $t("footer.brand") }}
                    </h2>

                    <p class="text-[var(--color-text)] leading-8 paragraph max-w-[300px]">
                        {{ $t("footer.description") }}
                    </p>

                    <!-- Social -->
                    <div class="flex items-center gap-3">
                        <a href="#" class="footerSocial paragraph">
                            <Icon icon="line-md:facebook" />
                        </a> 

                        <a href="#" class="footerSocial paragraph">
                            <Icon icon="line-md:instagram" />
                        </a>

                        <a href="#" class="footerSocial paragraph">
                            <Icon icon="line-md:twitter-x" />
                        </a>
                    </div>
                </div>

                <!-- Links -->
                <div>
                    <h3 class="footerTitle paragraph">
                        {{ $t("footer.quickLinks") }}
                    </h3>

                    <ul class="footerList smallText">
                        <li>
                            <RouterLink to="/">
                                {{ $t("nav.home") }}
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink to="/projects">
                                {{ $t("nav.projects") }}
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink to="/about">
                                {{ $t("nav.about") }}
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink to="/news">
                                {{ $t("nav.news") }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contactus">
                                {{ $t("nav.contact") }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="footerTitle paragraph">
                        {{ $t("footer.services") }}
                    </h3>

                    <ul class="footerList smallText">
                        <li>{{ $t("footer.service1") }}</li>
                        <li>{{ $t("footer.service2") }}</li>
                        <li>{{ $t("footer.service3") }}</li>
                        <li>{{ $t("footer.service4") }}</li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h3 class="footerTitle paragraph">
                        {{ $t("footer.contact") }}
                    </h3>

                    <div class="space-y-5">

                        <div class="footerContact paragraph">
                            <Icon icon="solar:phone-calling-bold" />

                            <div>
                                <p class="footerLabel extraSmallText">
                                    {{ $t("footer.phone") }}
                                </p>

                                <p class="footerValue smallText">
                                    +20 123 456 789
                                </p>
                            </div>
                        </div>

                        <div class="footerContact paragraph">
                            <Icon icon="solar:letter-bold" />

                            <div>
                                <p class="footerLabel extraSmallText">
                                    {{ $t("footer.email") }}
                                </p>

                                <p class="footerValue smallText">
                                    info@aqarmisr.com
                                </p>
                            </div>
                        </div>

                        <div class="footerContact paragraph">
                            <Icon icon="solar:map-point-bold" />

                            <div>
                                <p class="footerLabel extraSmallText">
                                    {{ $t("footer.location") }}
                                </p>

                                <p class="footerValue smallText leading-7">
                                    {{ $t("footer.address") }}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <!-- Bottom -->
            <div class="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                <p class="smallText text-[var(--color-text)]">
                    {{ $t("footer.copyright") }}
                </p>

                <div class="flex items-center gap-5 smallText">
                    <a href="#" class="hover:text-[var(--color-primary)] transition">
                        {{ $t("footer.privacy") }}
                    </a>

                    <a href="#" class="hover:text-[var(--color-primary)] transition">
                        {{ $t("footer.terms") }}
                    </a>
                </div>
            </div>

        </div>
    </footer>
</template>
<script setup></script>
<style scoped>
.footerTitle {
 
  font-weight: 700;
  margin-bottom: 24px;

  border-inline-start: 4px solid var(--color-primary);
  padding-inline-start: 12px;

  color: var(--color-title);
}

.footerList {
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: var(--color-text);
}

.footerList li {
  cursor: pointer;
  transition: 0.3s;
}

.footerList li:hover {
  color: var(--color-primary);
}

.footerSocial {
font-size: var(--text-lg);
padding: 5px;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-surface);
  color: var(--color-primary);

  transition: all 0.3s ease;
}

.footerSocial:hover {
  background: var(--color-primary);
  color: black;

  transform: translateY(-4px);
}

.footerContact {
  display: flex;
  align-items: flex-start;
  gap: 16px;

  color: var(--color-primary);
}

.footerLabel {
  font-size: 12px;
  margin-bottom: 4px;

  color: var(--color-text);
}

.footerValue {
  font-size: 14px;
  font-weight: 600;

  color: var(--color-title);
}
</style>