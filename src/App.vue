<template>
    <div class="container">
        <div class="box">
            <div class="socials">
                <SocialIcon
                        link="https://github.com/AlexNijjar"
                        name="GitHub"
                        :icon="Github"
                        style="height: 100%; margin-right: 10px"
                />
                <SocialIcon
                        link="https://www.linkedin.com/in/alexnijjar/"
                        name="LinkedIn"
                        :icon="Linkedin"
                        style="height: 100%; margin-right: 10px"
                />
                <SocialIcon
                        link="https://twitter.com/AlexNijjar"
                        name="Twitter"
                        :icon="Twitter"
                        style="height: 100%; margin-right: 10px"
                />
                <SocialIcon
                        link="https://www.youtube.com/@AlexNijjar"
                        name="YouTube"
                        :icon="Youtube"
                        style="height: 100%; margin-right: 10px"
                />
                <SocialIcon
                        link="https://www.twitch.tv/alexnijjar"
                        name="Twitch"
                        :icon="Twitch"
                        style="height: 100%; margin-right: 10px"
                />
                <SocialIcon
                        link="https://modrinth.com/user/AlexNijjar"
                        name="Modrinth"
                        :icon="Package"
                        style="height: 100%; margin-right: 10px"
                />
                <SocialIcon
                        link="https://legacy.curseforge.com/members/alexnijjar/projects"
                        name="CurseForge"
                        :icon="Flame"
                        style="height: 100%"
                />
            </div>
            <div class="description">
                <h1>Hi, I'm Alex</h1>
                <p class="intro">I'm a software engineer that does things.</p>
                <p>
                    I started with java and am currently learning other languages and stuff.
                </p>
                <p>Here are some of my projects:</p>
                <div class="icon-container">
                    <SvgIcon
                            link="https://www.curseforge.com/minecraft/mc-mods/ad-astra"
                            icon-url="https://cdn.discordapp.com/attachments/1073717602880327761/1095068326604066888/Ad_Astra2x.svg"
                            name="Ad Astra"
                    />
                    <SvgIcon
                            link="https://www.curseforge.com/minecraft/mc-mods/chipped"
                            icon-url="https://cdn.discordapp.com/attachments/1073717602880327761/1095068326943801376/Chipped2x.svg"
                            name="Chipped"
                    />
                    <SvgIcon
                            link="https://www.curseforge.com/minecraft/mc-mods/handcrafted"
                            icon-url="https://cdn.discordapp.com/attachments/1073717602880327761/1095068327560368148/Handcrafted2x.svg"
                            name="Handcrafted"
                    />
                </div>
                <p>You can contact me at:</p>
                <ul>
                    <li><b>contact@alexnijjar.tech</b></li>
                    <li><b>AlexNijjar#5656</b></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
import SocialIcon from "@/components/SocialIcon.vue";
import SvgIcon from "@/components/SvgIcon.vue";

import {Github, Linkedin, Twitter, Youtube, Twitch, Package, Flame} from 'lucide-vue-next';
</script>

<style>
.container {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow-y: auto;
}

.box {
    background-color: seashell;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 350px;
    min-height: 200px;
    max-width: 800px;
}

.socials {
    display: flex;
    flex-wrap: nowrap;

}

.description {
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    line-height: 1.5;
}

.description h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}

.description p {
    font-size: 1.1em;
    line-height: 1.5;
    margin-bottom: 1em;
}

.description .intro {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 1em;
}

.icon-container {
    display: flex;
    justify-content: flex-start;
}

.svg-container img {
    width: 10%;
}
</style>