<template>
    <div class="Home">
        <div class="Header">
            <div class="__Container Top" :class="{active: active}">
                <div class="Left">
                    Divine Rapier
                </div>
                <div class="Right">
                    <span><a @click="link('#')">Home</a></span>
                    <span><a @click="link('#service')">Service</a></span>
                    <span><a @click="link('#contact')">Contact Us</a></span>
                </div>
            </div>
        </div>
        <div class="Banner">
            <div class="__Container Banner-Box">
                <div class="Banner-Left">
                    <H1>
                        We Build Liquid Markets <br/>
                        for Digital Assets
                    </H1>
                    <div class="Moer">
                        <a @click="link('#service')">
                            Discover More
                            <i class="el-icon-right"></i>
                        </a>
                    </div>
                </div>
                <div class="Banner-Right">
                    <iframe src="https://acherontrading.com/animation.html"
                            style="border:0px #ffffff none;" name="myiFrame"
                            scrolling="no" frameborder="1" marginheight="0px"
                            marginwidth="0px" height="300px" width="100%px" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="AA">
            <img src="../assets/images/bg-1.svg" alt="">
        </div>
        <div class="Serve __Container" id="service">
            <div class="Serve-Left">
                Our Services
            </div>
            <div class="Serve-Right">
                <div class="Title">
                    AcheronTrading is a designated market maker which provides liquidity and advisory services to
                    digital asset issuers on exchanges
                </div>
                <div class="List">
                    <div class="Flex">
                        <div class="Item" v-for="(data, index) in item" v-if="index ===0 || index === 1">
                            <div class="img">
                                <img :src="data.img" alt="">
                            </div>
                            <div class="Item-Title">{{ data.title }}</div>
                            <div class="Content">
                                {{ data.c }}
                            </div>
                        </div>
                    </div>
                    <div class="Flex">
                        <div class="Item" v-for="(data, index) in item" v-if="index === 3 || index === 2">
                            <div class="img">
                                <img :src="data.img" alt="">
                            </div>
                            <div class="Item-Title">{{ data.title }}</div>
                            <div class="Content">
                                {{ data.c }}
                            </div>
                        </div>
                    </div>

                    <div class="Title">
                        Our market making services are not available and shall not be provided to entities located,
                        incorporated, or otherwise established in, or to a citizen or resident of, the Republic of
                        Singapore.
                    </div>
                </div>
            </div>
        </div>
        <div class="AA">
            <img src="../assets/images/top-bg.svg" alt="">
        </div>
        <div class="Form" id="contact">
            <div class="__Container">
                <div class="Request">
                    <div class="title">
                        Request a consultation today.
                    </div>
                    <Form/>
                </div>
            </div>
        </div>
        <div class="">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Form from './Form';
import Footer from '@/views/Footer';

export default {
    components: {
        Form,
        Footer
    },
    name: 'Home',
    data() {
        return {
            active: false,
            item: [
                {
                    img: require('../assets/images/MarketMaking.svg'),
                    title: 'Market Making',
                    c: 'We provide liquidity for digital assets upon the request of, and on the exchanges designated by our customers: exchanges require digital asset issuers to maintain certain levels of liquidity to remain listed and we ensure our customers meet (and often exceed) such requirements'
                },
                {
                    img: require('../assets/images/ExchangeAdvisory.svg'),
                    title: 'Exchange Advisory',
                    c: 'We research, identify and assess the suitable exchange(s) for digital asset issuers throughout the lifecycle of their digital asset'
                },
                {
                    img: require('../assets/images/MarketStrategies.svg'),
                    title: 'Market Strategies',
                    c: 'We have designed our algorithm suite and approach to inventory management to create sustainable, liquid markets to facilitate efficient trade on nearly any exchange in the world'
                },
                {
                    img: require('../assets/images/Risk.svg'),
                    title: 'Risk Management & Modeling',
                    c: 'We consult teams in selecting the appropriate liquidity strategy to develop a liquid market, while managing the inventory risk for their digital assets'
                },
            ]
        };
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.windowScroll);
    },
    methods: {
        link(id) {
            if (id === '#') {
                document.body.scrollIntoView();
                return;
            }
            document.querySelector(id).scrollIntoView(true);
        },
        windowScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.active = scrollTop > 350;
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.windowScroll);
    }

};
</script>
<style lang="less" scoped>
.__Container {
    width: 1200PX;
    margin: 0 auto;
}

.Home {
    .Header {
        position: fixed;
        top: 0;
        width: 100%;
        background: #2334D8;
        z-index: 100;

        .Top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 115PX;

            &.active {
                box-shadow: 0 0 7px rgba(0, 0, 0, .1);
            }
        }

        .Left {
            color: #ffffff;
            font-size: 30PX;
            cursor: pointer;
        }

        .Right {

            font-size: 14PX;

            span {
                padding: 0 30PX;

                a {
                    color: #ffffff;
                    cursor: pointer;

                    &:hover {
                        color: rgba(#ffffff, .7);
                    }
                }
            }
        }
    }

    .Banner {
        height: 590PX;
        display: flex;
        padding: 115PX 40PX 0 40PX;
        background-image: linear-gradient(88.01deg, #2334D8 47.63%, #2334D8 88.8%) !important;

        .Banner-Box {
            padding-top: 80PX;
            position: relative;
        }

        .Banner-Left {
            width: 510PX;
            height: 100%;
            font-size: 36PX;
            font-weight: 700;
            color: #ffffff;

            font-family: 'Nunito Sans', Helvetica, Arial, Lucida, sans-serif;

            .Moer {
                a {
                    position: relative;
                    display: block;
                    width: 205PX;
                    height: 47PX;
                    line-height: 47PX;
                    font-size: 16PX;
                    background: #ffffff;
                    border-radius: 100PX;
                    padding-left: 20PX;
                    color: #2334D8;
                    cursor: pointer;

                    &:after {
                        font-size: inherit !important;
                        opacity: 1;
                        right: 0;
                        background: #35EABF;
                        width: 42PX;
                        height: 46.8PX;
                        text-align: center;
                        margin-top: 0PX;
                        -webkit-border-top-right-radius: 100PX;
                        -webkit-border-bottom-right-radius: 100PX;
                        -moz-border-radius-topright: 100PX;
                        -moz-border-radius-bottomright: 100PX;
                        border-top-right-radius: 100PX;
                        border-bottom-right-radius: 100PX;
                        line-height: 47PX !important;
                        margin-left: 0PX;
                        color: #2334D8;
                        content: "";
                        position: absolute;
                        text-shadow: none;
                        font-weight: 400;
                        text-transform: none;
                    }

                    .el-icon-right {
                        font-size: 22PX;
                        z-index: 100;
                        position: absolute;
                        right: 12PX;
                        font-weight: bold;
                        transform: translateY(50%);
                    }

                    &:hover {
                        .el-icon-right {
                            color: #ffffff;
                        }
                    }
                }
            }

        }

        .Banner-Right {
            flex: 1;
            top: 50PX;
            position: absolute;
            left: 350PX;
            width: 100%;
        }
    }

    .AA {
        img {
            width: 100%;
            border: none;
            display: block;
        }

        //margin-bottom: 54PX;

    }

    .Serve {
        //height: 1200PX;
        display: flex;
        justify-content: space-between;
        padding-top: 108PX;
        margin-bottom: 160PX;
        .Serve-Left {
            width: 375PX;
            font-size: 36PX;
            color: #2334D8;
            font-weight: bold;
        }

        .Serve-Right {
            flex: 1;
            font-size: 16PX;
            padding-left: 40PX;
            color: #666;

            .Title {
                font-size: 16PX;
                line-height: 30PX;
                margin-bottom: 50px;
            }

            .List {
                //display: flex;
                //justify-content: space-between;
                .Item {
                    width: 45%;

                    .img {
                        height: 100PX;
                    }

                    .Item-Title {
                        font-family: 'Nunito Sans', Helvetica, Arial, Lucida, sans-serif;
                        font-weight: 300;
                        font-size: 18PX;
                        color: #2334D8;
                        padding: 0 0 10PX 0;
                    }

                    .Content {
                        font-size: 16PX;
                        line-height: 30PX;
                    }
                }
            }
        }
    }

    .Form {
        margin-top: -5PX;
        height: 680PX;
        background: #2334D8;

        .Request {
            float: right;

            .title {
                width: 642PX;
                text-align: left;
                font-family: 'Nunito Sans', Helvetica, Arial, Lucida, sans-serif;
                font-weight: 300;
                font-size: 36PX;
                color: #ffffff;
                margin-bottom: 50PX;
            }
        }
    }

}

.Flex {
    display: flex;
    padding: 50PX 0;
    justify-content: space-between;
}
@media screen and (max-width:750px){
    .__Container {
        width: 100%;
        padding: 0 15PX;
    }
    .Home{
        .Header {
            .Left {
                color: #ffffff;
                font-size: 30px;
                cursor: pointer;
            }
            .Right {
                font-size: 16px;
                span {
                    padding: 0 30px;
                }
            }
        }
        .Banner {
            //height: 590PX;
            display: flex;
            padding: 115PX 0 0 0;
            .Banner-Box {
                padding-top: 30px;
                position: relative;
            }

            .Banner-Left {
                width: 100%;
                height: 400px;
                font-size: 36px;
                padding-top: 50px;
                .Moer {
                    a {
                        position: relative;
                        display: block;
                        width: 205PX;
                        height: 47PX;
                        line-height: 47PX;
                        font-size: 16PX;
                        background: #ffffff;
                        border-radius: 100PX;
                        padding-left: 20PX;
                        color: #2334D8;
                        cursor: pointer;

                        &:after {
                            font-size: inherit !important;
                            opacity: 1;
                            right: 0;
                            background: #35EABF;
                            width: 42PX;
                            height: 46.8PX;
                            text-align: center;
                            margin-top: 0PX;
                            -webkit-border-top-right-radius: 100PX;
                            -webkit-border-bottom-right-radius: 100PX;
                            -moz-border-radius-topright: 100PX;
                            -moz-border-radius-bottomright: 100PX;
                            border-top-right-radius: 100PX;
                            border-bottom-right-radius: 100PX;
                            line-height: 47PX !important;
                            margin-left: 0PX;
                            color: #2334D8;
                            content: "";
                            position: absolute;
                            text-shadow: none;
                            font-weight: 400;
                            text-transform: none;
                        }

                        .el-icon-right {
                            font-size: 22PX;
                            z-index: 100;
                            position: absolute;
                            right: 12PX;
                            font-weight: bold;
                            transform: translateY(50%);
                        }

                        &:hover {
                            .el-icon-right {
                                color: #ffffff;
                            }
                        }
                    }
                }

            }

            .Banner-Right {
                flex: 1;
                top: 550px;
                position: absolute;
                left: 0;
                width: 100%;
            }
        }
        .Serve{
            min-height: 1200px;
            flex-direction: column;
            .Serve-Left{
                text-align: center;
            }
            .Serve-Right{
                padding-left: 0;
                .List{
                    .Item{
                        width: 100%;
                        margin-bottom: 20PX;
                    }
                }
            }
            .Flex{
                flex-direction: column;
                padding: 0;
            }
        }

        .Form {
            margin-top: -5PX;
            margin-bottom: 50px;

            .Request {
                float: none;
                width: 100%;
                .title {
                    width: 100%;
                    text-align: center;
                    font-size: 36px;
                    padding-top: 50px;
                    margin-bottom: 0;
                }
            }
        }
    }


}
</style>

