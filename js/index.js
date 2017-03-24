$(function(){
		$('#ul1 li').mouseover(function(){
			$('#ul1 li').removeClass('active');
			$('#ol1 li').removeClass('show');
			
			$(this).addClass('active');	
			$('#ol1 li').eq($(this).index()).addClass('show');
		})	
	//关于顶部的显示隐藏
	
	$('.header .menu li').hover(function () {
		if($(this).find('.xiala').length>0){
			$(this).css({'background': '#fff','height':' 36px','border-color':'#eee'});
			$(this).find('.xiala').css('display','block');
		}
	},function () {
		$(this).css({'background': 'none','height':' 35px','border-color': '#f5f5f5',});
		$(this).find('.xiala').css('display','none');
	})
	
	//搜索部分
	$('.page1 .erweima a').click(function () {
		$('.page1 .erweima').css('display','none');
	})
	$('.search1 li').click(function () {
		$.each('search1 li',function (index,item) {
			$('.search1 li a').removeClass('active')
			$('.search1 li a').removeClass('active1')
			$('.search .search-01').css('border','3px solid #ff5400')
			$('.search .search-01 .inp2').css('background',' #ff5400')
		})
		$(this).find('a').addClass('active');
		if($(this).attr('class')=='tianmao'){
			$(this).find('a').addClass('active1');
			$('.search .search-01').css('border','3px solid #b80b18')
			$('.search .search-01 .inp2').css('background',' #b80b18')
		}
	})
	//吸顶条部分
	$(window).scroll(function () {
		if($(this).scrollTop()>200){
			$('.fix1').css('display','block')
		}else{
			$('.fix1').css('display','none')
		}
		$('.celan').css('top',480-$(this).scrollTop())
		if($(this).scrollTop()>300){
			$('.celan').css('top','55px')
		}

	})

	//轮播图
	new Swiper('.lunbo .swiper-container',{
		spaceBetween:10,//slide之间的缝隙
		nextButton:'.swiper-button-next',
		prevButton:'.swiper-button-prev',
		pagination:'.swiper-pagination',//让底下的点显示
		paginationClickable:true,//是否可以点击小圆点
		loop:true,//无缝轮播
		autoplay:2000,//自动播放
		autoplayDisableOnInteraction:false
	});
	new Swiper('.lunbo1 .swiper-container',{
		spaceBetween:10,//slide之间的缝隙
		nextButton:'.swiper-button-next',
		prevButton:'.swiper-button-prev',
		pagination:'.swiper-pagination',//让底下的点显示
		paginationClickable:true,//是否可以点击小圆点
		loop:true,//无缝轮播
		autoplay:2500,//自动播放
		autoplayDisableOnInteraction:false
	});

	$('.lunbo').hover(function () {
		$('.lunbo .next').css('display','block');
		$('.lunbo .prev').css('display','block');
	},function () {
		$('.lunbo .next').css('display','none');
		$('.lunbo .prev').css('display','none');
	})
	$('.lunbo1').hover(function () {
		$('.lunbo1 .next').css('display','block');
		$('.lunbo1 .prev').css('display','block');
	},function () {
		$('.lunbo1 .next').css('display','none');
		$('.lunbo1 .prev').css('display','none');
	})
	//关于侧栏定位
	$('.celan').css('left',$('.erweima').offset().left+$('.erweima').width()+10);

	$('.celan a').eq(0).click(function () {
		$("html,body").animate({scrollTop:$("#id1").offset().top-60},500)
	})
	$('.celan a').eq(1).click(function () {
		$("html,body").animate({scrollTop:$("#id2").offset().top-60},500)
	})
	$('.celan a').eq(2).click(function () {
		$("html,body").animate({scrollTop:$("#id3").offset().top-60},500)
	})
	$('.celan a').eq(3).click(function () {
		$("html,body").animate({scrollTop:$("#id4").offset().top-60},500)
	})
	$('.celan a').eq(4).click(function () {
		$("html,body").animate({scrollTop:$("#id5").offset().top-60},500)
	})
	$('.celan a').eq(5).click(function () {
		$('html,body').animate({scrollTop:0},500)
	})

	$(window).scroll(function () {
		var t=$(this).scrollTop()
		if(t>$("#id1").offset().top-120){
			$('.celan li').css('background','#fff')
			$('.celan li a').removeClass('active')
			$('.celan li').eq(0).css('background','#ff4400')
			$('.celan li a').eq(0).addClass('active')
		}
		if(t>$("#id2").offset().top-120){
			$('.celan li').css('background','#fff')
			$('.celan li a').removeClass('active')
			$('.celan li').eq(1).css('background','#ff4400')
			$('.celan li a').eq(1).addClass('active')
		}
		if(t>$("#id3").offset().top-120){
			$('.celan li').css('background','#fff')
			$('.celan li a').removeClass('active')
			$('.celan li').eq(2).css('background','#ff4400')
			$('.celan li a').eq(2).addClass('active')
		}
		if(t>$("#id4").offset().top-120){
			$('.celan li').css('background','#fff')
			$('.celan li a').removeClass('active')
			$('.celan li').eq(3).css('background','#ff4400')
			$('.celan li a').eq(3).addClass('active')
		}
		if(t>$("#id5").offset().top-120){
			$('.celan li').css('background','#fff')
			$('.celan li a').removeClass('active')
			$('.celan li').eq(4).css('background','#ff4400')
			$('.celan li a').eq(4).addClass('active')
		}

	})
	
	$('.celan li a').hover(function () {
		$(this).parent().css('background','#ff4400')
		$(this).addClass('active')
	},function () {
		$(this).parent().css('background','#fff')
		$(this).removeClass('active')
	})

})
