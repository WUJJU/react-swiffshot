var webpack=require('webpack');
var path=require('path');

var APP_DIR=path.resolve(__dirname,'src');
var BUILD_DIR=path.resolve(__dirname,'public/bundle/');
var config={
   entry:APP_DIR+'/index.jsx',
   output:{
   	 path:BUILD_DIR,
   	 filename:'bundle.js'
   },
   module:{
   	loaders:[
       {
        test:/\.jsx?/,
        loader:'babel',
        query:{
        	presets:['react','es2015']
        }


       }
   	]
   }


};
module.exports=config;