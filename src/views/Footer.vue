<template>
    <div class="Footer __Container">
        <div class="lh">
            <span class="email">Hello@divinerapier.co</span>
            <span class="ltd">Divine Rapier LTD</span>
        </div>
        <div class="lh">
            <span class="home">
                <a @click="link('#')">Home</a>
            </span>
            <span class="home" style="margin-left: 20px;">
                <span><a @click="link('#service')">Service</a></span>
            </span>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        link(id) {
            if (id === '#') {
                document.body.scrollIntoView();
                return;
            }
            document.querySelector(id).scrollIntoView(true);
        }
    }
};
</script>

<style lang="less" scoped>
.Footer {
    height: 164PX;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .email {
        color: #2334D8;
        font-size: 22PX;
    }

    .ltd {
        color: #2334D8;
        font-size: 22PX;
        margin-left: 40PX;
    }

    .home {
        a {
            font-family: 'Nunito Sans', Helvetica, Arial, Lucida, sans-serif;
            text-transform: uppercase;
            font-size: 18px;
            color: #2334D8;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 750px) {
    .Footer {
        margin-bottom: 100PX;
        //padding: 50px 0;
        flex-direction: column;
        justify-content: center;
        .email {
            font-size: 22px;
        }

        .ltd {
            font-size: 22px;
            margin-left: 40px;
        }
        .lh{
            height: 100px;
        }

        .home {
            a {
                font-family: 'Nunito Sans', Helvetica, Arial, Lucida, sans-serif;
                text-transform: uppercase;
                font-size: 18px;
                color: #2334D8;
                cursor: pointer;
            }
        }
    }
}
</style>
