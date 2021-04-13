const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catInfo = Schema({
    name: String,
    infomations: [{ type: Schema.Types.ObjectId, ref: 'infomation' }],

});
module.exports = mongoose.model('catInfo', catInfo);

// 600c16d4276f3082bd3f3b6e
// 600c174f276f3082bd3f3b6f
// 600c1871c533df83caa2bc03
// 600c1bd1c533df83caa2bc04
// 600c1c62c533df83caa2bc05
// 600c1c9dc533df83caa2bc06
// 600c1d19c533df83caa2bc07

// 600c1e42c533df83caa2bc08
// 600c1e7dc533df83caa2bc09
// 600c1eecc533df83caa2bc0a
// 600c1f60c533df83caa2bc0b
// 600c2028c533df83caa2bc0c
// 600c2052c533df83caa2bc0d
// 600c209fc533df83caa2bc0e

// 600c2135c533df83caa2bc0f
// 600c2193c533df83caa2bc10
// 600c21dfc533df83caa2bc11
// 600c22cfc533df83caa2bc12
// 600c2307c533df83caa2bc13
// 600c2357c533df83caa2bc14
// 600c23a7c533df83caa2bc15

// id product
// // ducati4 
// 600bdb03a507fa69fbce7881
// 600bdbe6a507fa69fbce7882
// 600bdfbda507fa69fbce7887
// 600c124b9a1796772304cbb7

// // kawa3 
// 600bde05a507fa69fbce7883
// 600bde42a507fa69fbce7884
// 600bde74a507fa69fbce7885
// 600bded1a507fa69fbce7886

// // honda 2 
// 600be041a507fa69fbce7888
// 600be08da507fa69fbce7889
// 600be0c6a507fa69fbce788a
// 600be116a507fa69fbce788b

// // symbols 7
// 600be157a507fa69fbce788c
// 600be1b2a507fa69fbce788d
// 600be227a507fa69fbce788f
// 600be1f0a507fa69fbce788e

// // piagio5 
// 600be296a507fa69fbce7890
// 600be2efa507fa69fbce7891
// 600be320a507fa69fbce7892
// 600be351a507fa69fbce7893

// suzuki
// 600be396a507fa69fbce7894
// 600be3ffa507fa69fbce7895
// 600be437a507fa69fbce7896
// 600c0b859a1796772304cbae

// // haley8
// 600c0c1f9a1796772304cbaf
// 600c0c6e9a1796772304cbb0
// 600c0cf69a1796772304cbb1
// 600c0d479a1796772304cbb2 

// // yamaha1 
// 600c0ea69a1796772304cbb3
// 600c0ee49a1796772304cbb4
// 600c0f559a1796772304cbb5
// 600c0fb09a1796772304cbb6