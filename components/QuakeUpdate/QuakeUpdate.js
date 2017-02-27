import React from 'react';
// import axios from 'axios';
import {Flex, Box} from 'reflexbox'
import {Panel, PanelHeader, Text, PanelFooter, LinkBlock, Heading} from 'rebass';


export default class QuakeUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // var address = ["207 Montrose Rd, Mount Culverden 7392新西兰", "148 Kaparu Rd, Lake Grassmere 7285新西兰", "335 Kaparu Rd, Lake Grassmere 7285新西兰", "700 Marfells Beach Rd, Lake Grassmere 7285新西兰", "207 Montrose Rd, Mount Culverden 7392新西兰", "173 Albert Rd, Tokomaru 4474新西兰", "455 McRaes Rd, Scargill 7483新西兰", "2004 SH 2, Whakaki 4198新西兰", "274 Whakamahi Rd, Wairoa 4193新西兰", "52 Charlton Rd, Te Awanga 4172新西兰", "1753 Mouse Point Rd, Tekoa Range 7392新西兰", "318 Cable Station Rd, Blind River 7285新西兰", "204 Cable Station Rd, Blind River 7285新西兰", "1209A Riverside Rd, Mangapapa, Pouawa 4071新西兰", "424 Pahau Downs Rd, Mount Culverden 7392新西兰", "817 Newall Rd, Newall 4381新西兰", "1753 Mouse Point Rd, Tekoa Range 7392新西兰", "1031 Whangaehu Valley Rd, Whangaehu Valley 5886新西兰", "4988 Te Araroa Rd, Hicks Bay 4087新西兰", "251 Gulch Rd, Ward 7285新西兰", "936 Inland Rd, Waiau 7395新西兰", "1739 Pori Rd, Alfredton 4986新西兰", "126 Merrifields Rd, Blind River 7285新西兰", "758 Mouse Point Rd, Mount Culverden 7391新西兰", "89 Caithness Rd, Rotherham 7391新西兰", "738 Tutaetoko Rd, Toatoa 3197新西兰", "803 State Hwy, Tirohanga 3197新西兰", "72 Marfells Beach Road, Lake Grassmere 7285新西兰", "335 Kaparu Rd, Lake Grassmere 7285新西兰", "1178 Puhi Puhi Rd, Puhi Puhi 7371新西兰", "185 Marine Parade, New Brighton, Christchurch 8083新西兰", "93 Waitane Rd, Oaro 7374新西兰", "89 Caithness Rd, Rotherham 7391新西兰", "365 Ward Beach Rd, Ward 7285新西兰", "63 Waikupa Rd, Okoia 4582新西兰", "84 Omaio Pa Rd, Omaio 3199新西兰", "670 Pahau Downs Rd, Mount Culverden 7392新西兰", "62 Blue Duck Valley Rd, Seaward Valley 7371新西兰", "553 Puhi Puhi Rd, Mangamaunu 7371新西兰", "800 Kekerengu Valley Rd, Clarence 7371新西兰", "32 Moa Rd, South Bay 7300新西兰", "542 Beach Rd, Porangahau 4293新西兰", "335 Kaparu Rd, Lake Grassmere 7285新西兰"];
        function getURL(URL) {
            return new Promise(function (resolve, reject) {
                var req = new XMLHttpRequest();
                req.open('GET', URL, true);
                req.onload = function () {
                    if (req.status === 200) {
                        resolve(req.responseText);
                    } else {
                        reject(new Error(req.statusText));
                    }
                };
                req.onerror = function () {
                    reject(new Error(req.statusText));
                };
                req.send();
            });
        }


        var latlngs = [];
        var total = [];
        var address = [];
        let quakeApi = 'https://api.geonet.org.nz/quake?MMI=3';

// 2: 对 `then` 进行 promise chain 方式进行调用
        function getGoogleUrl(latlng) {
            return "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&location_type=ROOFTOP&result_type=street_address&key=AIzaSyAZF4SM9KTeTMGbAFYnzURVBK9847FjORE";

        }

        function getApiPromise(apiUrl) {
            return new Promise(function (resolve) {
                var quake = getURL(apiUrl).then(JSON.parse);
                resolve(quake);
            });
        }

        var that = this;

        var ApiPromise = getApiPromise(quakeApi);
        ApiPromise.then(function (value) {
            value.features.map(function (item) {
                var lnglat = item.geometry.coordinates, latlng;

                if (lnglat) {
                    latlng = lnglat.toString().split(',').reverse().join(','); //location.latlng =
                    latlngs.push(latlng);
                }
            });
            return latlngs;

        }).then(function (latlngs) {
            latlngs.forEach(function (latlng) {
                let url = getGoogleUrl(latlng);
                total.push(getURL(url).then(JSON.parse))
            });


            Promise.all(total).then(function (dataArr) {
                dataArr.forEach(function (data) {

                    if (data.status == "OK") {
                        address.push(data.results[0].formatted_address)
                    }
                });

                that.setState({
                    posts: address,
                    loading: false,
                    error: null
                });

            }).catch(function (err) {
                console.log(err);
            });

        });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    renderPosts() {
        if (this.state.error) {
            return this.renderError();
        }

        return (
            <Flex align='center' wrap>
                <Box sm={3}>
                    {this.state.posts.map((post, index) =>

                        <Panel theme='success' key={index}>
                            <PanelHeader>
                                {index + 1}
                            </PanelHeader>
                            <PanelFooter>
                                <Text children={post}/>
                            </PanelFooter>
                        </Panel>
                    )}

                </Box>
            </Flex>

        );
    }

    render() {
        return (
            <div>
                <h1>Quakes</h1>

                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

