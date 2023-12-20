<script>
import { store } from '../store';
export default {
    name: "sezione2footer",
    data() {
        return {
            store,
            copyright: ["Copyright 2012 - 2020 |", "Avada Theme by Theme Fusion |", "All Rights Reserved |", "Powered by WordPress"]
        }
    }
}

</script>
<template>
    <section class="sezione2footer">
        <div class="copyright">
            <div>
                <div class="iconacopy">
                    <font-awesome-icon icon="fa-regular fa-copyright" />
                </div>

                <ul class="iconacopy">
                    <li v-for="copy in copyright">
                        {{ copy }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sezione2footer {
    background-color: #f7f7f7;

    .copyright {
        width: 95%;
        margin: 0 auto;
        padding: 20px 0px;
    }

    .iconacopy {
        display: inline-block;
        font-size: 13px;
    }

    ul li {
        display: inline-block;
    }
}
</style>