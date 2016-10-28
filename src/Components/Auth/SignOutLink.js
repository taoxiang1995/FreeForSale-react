//react/components/auth/SignOutLink.js
var React     = require('react');
var $         = require('jquery');
var Functions = require('../../util/Functions.js');

var SignOutLink =
  React.createClass({
    render:function(){
      return (
        <a href="#" onClick={this._signOut}>Sign out</a>
      )
    },
    _signOut: function(){
      $.ajax({
        method: "DELETE",
        url: "http://localhost:3000/users/sign_out.json",
        data: {
          authenticity_token: Functions.getMetaContent("csrf-token")
        }
      }).done(function(){
        location.reload();
      });
    }
  });
module.exports = SignOutLink;


// <div class="grid">
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="https://cdn1.macworld.co.uk/cmsdata/features/3605337/macbookair11_lifestyle_15_thumb800.jpg" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://i.dailymail.co.uk/i/pix/2016/06/20/21/35509BEB00000578-3643237-It_seems_that_every_week_leaks_surface_describing_a_new_feature_-a-13_1466454388932.jpg" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://i-cdn.phonearena.com/images/articles/231029-thumb/edge-header-tn.jpg" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://i.dailymail.co.uk/i/pix/2016/06/20/21/35509BEB00000578-3643237-It_seems_that_every_week_leaks_surface_describing_a_new_feature_-a-13_1466454388932.jpg" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="https://cdn1.macworld.co.uk/cmsdata/features/3605337/macbookair11_lifestyle_15_thumb800.jpg" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//   <div className="grid-item" >
//     <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://i-cdn.phonearena.com/images/articles/231029-thumb/edge-header-tn.jpg" />
//     <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
//       <div>
//         <div>$299</div>
//         <div>iPhone 7</div>
//       </div>
//       <div>256 views</div>
//     </div>
//
//     <div style={{flex:40}} className="detail">
//       <div>Sanfrancisco CA 90024</div>
//       <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
//     </div>
//   </div>
//
//
// </div>
