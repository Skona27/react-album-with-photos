(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={albumList:"Album_albumList__3lPsQ",albumItem:"Album_albumItem__1rhuK",albumPhoto:"Album_albumPhoto__14Q5f",caption:"Album_caption__3lpVl",link:"Album_link__3YmK0"}},17:function(e,t,a){e.exports={header:"Layout_header__3W40J",footer:"Layout_footer__1n6ZB",heading1:"Layout_heading1__ieZuA"}},18:function(e,t,a){e.exports={item:"Photos_item__3z4w5",fullSize:"Photos_fullSize__1mj8H"}},20:function(e,t,a){e.exports={button:"Pagination_button__2R9x6",indicator:"Pagination_indicator__hiwns"}},31:function(e,t,a){e.exports={spinner:"Spinner_spinner__in5K1",spin:"Spinner_spin__3lCO4"}},32:function(e,t,a){e.exports={backdrop:"Backdrop_backdrop__3BMX5"}},35:function(e,t,a){e.exports=a(76)},41:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),s=a.n(l),c=(a(41),a(12)),u=a(13),i=a(15),o=a(14),m=a(16),p=a(79),h=a(78),f=a(17),b=function(){return r.a.createElement("nav",{className:f.header},r.a.createElement("h1",{className:f.heading1},"Test Assignment"))},g=function(){return r.a.createElement("footer",{className:f.footer},r.a.createElement("p",null,"Author: Jakub Skoneczny, Portfolio ",r.a.createElement("a",{href:"https://jskoneczny.pl",target:"_blank",rel:"noopener noreferrer"},"jskoneczny.pl")))},d=a(2),E=a.n(d),_=a(10),v=a(5),x=a(30),P=a.n(x).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),k=a(9),w=a(11),j=a(77),O=function(e){return r.a.createElement("div",{className:w.albumItem},r.a.createElement(j.a,{to:"/albums/".concat(e.id),className:w.link},r.a.createElement("figure",null,r.a.createElement("img",{className:w.albumPhoto,alt:"",src:"https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"}),r.a.createElement("figcaption",{className:w.caption},r.a.createElement("p",null,r.a.createElement("strong",null,"Title:")," ",e.title),r.a.createElement("p",null,r.a.createElement("strong",null,"Author:")," ",e.username)))))},N=function(e){return r.a.createElement("ul",{className:w.albumList},e.albums.map(function(e){return r.a.createElement(O,{key:e.id,id:e.id,title:e.title,username:e.username})}))},S=a(20),y=function(e){return r.a.createElement("div",null,e.isPrev?r.a.createElement("button",{className:S.button,onClick:e.prevPage},"Prev"):null,r.a.createElement("span",{className:S.indicator},e.current?e.current:null),e.isNext?r.a.createElement("button",{className:S.button,onClick:e.nextPage},"Next"):null)},z=a(34),A=a(31),U=function(){return r.a.createElement("div",{className:A.spinner})},B=function(e){return function(t){var a=t.loading,n=Object(z.a)(t,["loading"]);return a?r.a.createElement(U,null):r.a.createElement(e,n)}},C=B(N),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).getAlbums=Object(v.a)(E.a.mark(function e(){var t,n,r,l,s,c,u,i,o,m=arguments;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:1,a.setState(Object(_.a)({},a.state,{loading:!0})),e.next=4,P.get("albums?_page=".concat(t,"&_limit=").concat(a.state.perPage));case 4:n=e.sent,r=!0,l=!1,s=void 0,e.prev=8,c=n.data[Symbol.iterator]();case 10:if(r=(u=c.next()).done){e.next=19;break}return i=u.value,e.next=14,a.getUsername(i.userId);case 14:o=e.sent,i.username=o;case 16:r=!0,e.next=10;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(8),l=!0,s=e.t0;case 25:e.prev=25,e.prev=26,r||null==c.return||c.return();case 28:if(e.prev=28,!l){e.next=31;break}throw s;case 31:return e.finish(28);case 32:return e.finish(25);case 33:a.pagination(n.headers.link),a.setState(Object(_.a)({},a.state,{page:t,albums:n.data,loading:!1}));case 35:case"end":return e.stop()}},e,null,[[8,21,25,33],[26,,28,32]])})),a.getUsername=function(){var e=Object(v.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.username);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.pagination=function(e){var t=e.split(","),n={nextPage:!1,prevPage:!1};t.forEach(function(e){switch(e.split(";")[1].replace(/\s/g,"")){case'rel="next"':n.nextPage=!0;break;case'rel="prev"':n.prevPage=!0}a.setState(Object(_.a)({},a.state,n))})},a.loadNextPage=Object(v.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getAlbums(a.state.page+1);case 2:case"end":return e.stop()}},e)})),a.loadPrevPage=Object(v.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getAlbums(a.state.page-1);case 2:case"end":return e.stop()}},e)})),a.state={perPage:10,page:null,prevPage:!1,nextPage:!1,albums:[],loading:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAlbums();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nextPage,a=e.prevPage,n=e.page,l=e.albums,s=e.loading;return r.a.createElement("main",null,r.a.createElement("div",{className:k.titleBar},r.a.createElement("h1",{className:k.heading1},"See all albums"),r.a.createElement(y,{isNext:t,isPrev:a,current:n,nextPage:this.loadNextPage,prevPage:this.loadPrevPage})),r.a.createElement(C,{loading:s,albums:l}))}}]),t}(n.Component),F=a(18),I=function(e){return r.a.createElement("figure",{className:F.item,onClick:function(){e.fullSize(e.url)}},r.a.createElement("img",{src:e.thumbnailUrl,alt:""}),r.a.createElement("figcaption",null,e.title))},R=function(e){return e.photos.map(function(t){return r.a.createElement(I,Object.assign({key:t.id},t,{fullSize:e.photoClick}))})},T=a(8),D=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:T.marginTop},"Info:"),r.a.createElement("ul",{className:T.list},r.a.createElement("li",null,"Name: ",r.a.createElement("em",null,e.user.name)),r.a.createElement("li",null,"Email: ",r.a.createElement("em",null,e.user.email)),r.a.createElement("li",null,"Phone: ",r.a.createElement("em",null,e.user.phone)),r.a.createElement("li",null,"Website: ",r.a.createElement("em",null,e.user.website))))},H=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:T.marginTop},"Recent Posts:"),r.a.createElement("ul",{className:T.list},e.posts.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("em",null,"Title: ",e.title))})))},X=function(e){return r.a.createElement("div",{className:T.authorDetails},r.a.createElement("h2",{className:T.authorHeading},"Author Details"),r.a.createElement(D,{user:e.info}),r.a.createElement(H,{posts:e.posts}))},J=function(e){return e.children},K=a(32),Q=function(e){return e.show?r.a.createElement("div",{className:K.backdrop,onClick:e.close}):null},M=function(e){return e.show?r.a.createElement(J,null,r.a.createElement(Q,{show:e.show,close:e.close}),r.a.createElement("figure",{className:F.fullSize},r.a.createElement("img",{src:e.url,alt:""}))):null},W=B(J),Y=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).getAlbum=function(){var e=Object(v.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("albums/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getUser=function(){var e=Object(v.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getAlbumPhotos=function(){var e=Object(v.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("photos?albumId=".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getUserPosts=function(){var e=Object(v.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("posts?userId=".concat(t,"&_limit=2"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.displayFullSize=function(e){a.setState(Object(_.a)({},a.state,{imgFullSize:!0,fullSizeURL:e}))},a.closeFullSize=function(){a.setState(Object(_.a)({},a.state,{imgFullSize:!1,fullSizeURL:null}))};var n=a.props.match;return a.state={album:{id:n.params.id,title:null},user:{id:null,name:null,email:null,phone:null,website:null},photos:[],posts:[],loading:!1,imgFullSize:!1,fullSizeURL:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t,a,n,r,l,s,c,u,i,o,m,p,h;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState(Object(_.a)({},this.state,{loading:!0})),e.next=3,this.getAlbum(this.state.album.id);case 3:return t=e.sent,a=t.userId,n=t.id,r=t.title,l={id:n,title:r},e.next=8,this.getUser(a);case 8:return s=e.sent,c=s.name,u=s.email,i=s.phone,o=s.website,m={id:a,name:c,email:u,phone:i,website:o},e.next=13,this.getAlbumPhotos(n);case 13:return p=e.sent,e.next=16,this.getUserPosts(a);case 16:h=e.sent,this.setState({album:l,user:m,photos:p,posts:h,loading:!1});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(W,{loading:this.state.loading},r.a.createElement("div",{className:k.titleBar},r.a.createElement("h1",{className:k.heading1},"Album: ",this.state.album.title),r.a.createElement(j.a,{className:k.closeBtn,to:"/"},"Close X")),r.a.createElement("div",{className:k.photosPage},r.a.createElement(R,{photos:this.state.photos,photoClick:this.displayFullSize}),r.a.createElement(X,{info:this.state.user,posts:this.state.posts}))),r.a.createElement(M,{show:this.state.imgFullSize,url:this.state.fullSizeURL,close:this.closeFullSize}))}}]),t}(n.Component),V=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(J,null,r.a.createElement(b,null),r.a.createElement(h.a,{exact:!0,path:"/",component:L}),r.a.createElement(h.a,{path:"/albums/:id",component:Y}),r.a.createElement(g,null)))}}]),t}(n.Component);s.a.render(r.a.createElement(V,null),document.getElementById("root"))},8:function(e,t,a){e.exports={authorDetails:"User_authorDetails__2o7XF",list:"User_list__Y4z3c",marginTop:"User_marginTop__3QcYS",authorHeading:"User_authorHeading__3KQBp"}},9:function(e,t,a){e.exports={photosPage:"Page_photosPage__1UEWr",titleBar:"Page_titleBar__3sXcb",closeBtn:"Page_closeBtn__1vVhd",heading1:"Page_heading1__2XaHy"}}},[[35,2,1]]]);
//# sourceMappingURL=main.5b0a88d6.chunk.js.map