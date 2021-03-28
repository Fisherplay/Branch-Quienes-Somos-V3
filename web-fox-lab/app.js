let Story = {
    template: ` <div>
                    <v-container class="col-container">
                        <v-row justify="center" align="center">
                            <v-col>
                                <span class="title">
                                    <h2>SOBRE NOSOTROS</h2>
                                </span>  
                            </v-col>
                        </v-row>
                        <v-row
                        justify="center"
                        >
                            <v-col
                            sm="6"
                            md="4">
                                <v-card flat class="font-weight-medium">
                                    <v-card-title>
                                            <h3>QUE HACEMOS</h3>
                                    </v-card-title class="font_1">
                                        <v-row align="center">
                                            <v-col cols="6">
                                                <p><span class="font_1"> Disenamos tu pagina web o incluso tu portafolio!</span></p>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img height="100" widht="50" id="pic_1" src="./imagenes/Portfolio.png"></v-img>
                                                <v-img height="100" widht="50" src="./imagenes/Resume.png"></v-img>
                                            </v-col>
                                            <v-col cols="">
                                                <div class="div-flex">
                                                    <v-col cols="4">
                                                        <v-img id="pic_2" src="./imagenes/Article.png"></v-img>
                                                    </v-col>    
                                                    <v-col cols="4">
                                                        <v-img id="pic_3" src="./imagenes/confirmed.png"></v-img>
                                                    </v-col>
                                                </div>
                                            </v-col>
                                            <v-col cols="4">
                                                <span class="font_1">Ideamos la pagina web y confirmamos a tu gusto</span> 
                                            </v-col>
                                            <v-col cols="6">
                                                <span class="font_1"
                                                align="center">Para todos los Dispositivos</span>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-img src="./imagenes/Web-devices.png"></v-img>
                                            </v-col>         
                                        </v-row>
                                        <h3>Que Hacemos</h3>
                                    </v-card-title>
                                    <v-card-text>
                                        <h3></h3>
                                    </v-card-text >
                                    <v-row justify="center" align="center">
                                        <v-col cols="6">
                                            Disenamos tu pagina web o incluso tu portafolio!
                                        </v-col>
                                        <v-col cols="6">
                                            <v-img id="pic_1" src="./imagenes/resume.png"></v-img>
                                            <v-img  height="100" widht="50" src="./imagenes/Portfolio.png"></v-img>
                                        </v-col>
                                    </v-row>                                   
                                    <v-card-text >
                                        <h3></h3>
                                    </v-card-text>
                                    <v-img src="./imagenes/Article.png"></v-img>
                                    <v-img src="./imagenes/confirmed.png"></v-img>
                                    <v-card-text >
                                        <h3></h3>
                                    </v-card-text>
                                    <v-img src="Web-devices.png"
                                </v-card>
                                </v-col>
                                <v-col
                                md="4"
                                sm="6">
                                    <v-img id="pic_fox" :src="pic"></v-img>
                                </v-col>
                                <v-col
                                sm="12"
                                md="4">
                                <v-card flat>
                                    <div class="div-flex">
                                        <v-card-title >
                                            <v-col>
                                                <h3>QUIENES SOMOS</h3>
                                            </v-col>
                                        </v-card-title>
                                        <v-col>
                                            <v-img id="pic_4" src="./imagenes/FL_miniatura.png"></v-img>
                                        </v-col>
                                    </div>
                                    <v-card-text>
                                        <v-col cols="7">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis fugit repellendus nobis inventore corrupti sint totam, explicabo ullam quisquam dolorum aut maiores nisi assumenda debitis cupiditate nemo ipsam distinctio maxime saepe quos provident odit. Voluptates quas, totam minima illo ducimus, ullam accusamus aperiam sint error esse repellat dignissimos magnam. </p>
                                        </v-col>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>`,
    data () { return{
        pic: './imagenes/fox1.png'
    }
}
}

new Vue({
                    el:'#app',
                    components:{
                        'story': Story

                    },
                    vuetify: new Vuetify({
                        theme:{
                            themes:{
                                light:{
                                    primary: '#FF9800',
                                    secondary: '#EB5627',
                                    accent: '#FABB1B',
                                }
                            }
                        }
                    }),
    })