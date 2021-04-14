Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        header: {
            logo: {
                src: "img/logo.svg",
                alt: "NexGen Logo"
            },
            links: ["home", "services", "about", "pricing"],
            icons: {
                user: {
                    class: "far fa-user",
                    href: "#"
                }
            },
            buttons: {
                getInTouch: {
                    title: "Get In Touch",
                    class: "btn",
                    id: "green_btn",
                    href: "#"
                }
            }
        },
        footer: {
            inc: {
                title: "Example Inc",
                description: {
                    firstDesc: "Siamo una Inc bella che consegna veloce sceglici per favore.",
                    secondDesc: "Siamo una Inc bella che è anche economica,sappiamo che sei povero."
                }
            },
            contacts: {
                telephone: {
                    title: "1(305) 1234-5678",
                    iconPerfix: "fab fa-",
                    iconClass: "phone-alt"
                },
                email: {
                    title: "hello@example.com",
                    iconPerfix: "fab fa-",
                    iconClass: "fa-envelope"
                },
                location: {
                    address: "Main Avenue, 987",
                    btnHref: "https://www.google.it/maps/place/987+Main+Ave,+Passaic,+NJ+07055,+Stati+Uniti/@40.8707047,-74.1378147,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2fec8aa3213e5:0xab6c00ef8f54a598!8m2!3d40.8707007!4d-74.135626"
                },

                buttons: {
                    ViewMap: {
                        title: "View Map",
                        class: "btn",
                        id: "transparent_btn",
                        href: "#"
                    }
                }

            },
            socialContacts: {
                facebook: {
                    iconPerfix: "fab fa-",
                    iconClass: "facebook-f",
                    title: "Facebook",
                    link: "www.facebook.com"
                },
                twitter: {
                    iconPerfix: "fab fa-",
                    iconClass: "twitter",
                    title: "Twitter",
                    link: "www.twitter.com"
                },
                linkedin: {
                    iconPerfix: "fab fa-",
                    iconClass: "linkedin-in",
                    title: "Linkedin",
                    link: "www.linkedin.com"
                }
            },
        }
    },

});