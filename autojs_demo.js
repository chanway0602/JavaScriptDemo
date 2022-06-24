"use strict"

/*
应用名称：手机淘宝 包名： com.taobao.taobao
应用名称：QQ 包名： com.tencent.mobileqq
应用名称：微信 包名： com.tencent.mm
应用名称：今日头条 包名： com.ss.android.article.news
应用名称：抖音短视频 包名： com.ss.android.ugc.aweme
应用名称：微博 包名： com.sina.weibo
*/


if(launch("com.ss.android.ugc.aweme") == true)
{
    //waitForPackage("com.ss.android.ugc.aweme");
    toastLog("launch douyin successfully");
    while(true){
        sleep(5000);
        swipe(550, 2000, 550, 660, 500)
    }

}
else{
    toastLog("failed to launch douyin");
}


