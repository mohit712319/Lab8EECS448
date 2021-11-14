var picture = document.getElementsByClassName("img");
var url1="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg";
var url2="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg";
var url3="https://images.news18.com/ibnlive/uploads/2021/08/jumbo.jpg";
var url4="https://www.treehugger.com/thmb/65hcMmCLV2Y9sNc6BS61MGu_ETg=/2121x1193/smart/filters:no_upscale()/GettyImages-1043597638-49acd69677d7442588c1d8930d298a59.jpg";
var url5="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg";
const links=[url1,url2,url3,url4,url5];
var currenturl=0;
picture[0].src=links[currenturl];
function next()
{
	if(currenturl<4)
	{
		currenturl=currenturl+1;
	}
	else
	{
		currenturl=0;
	}
	picture[0].src=links[currenturl];
}
function previous()
{
	if(currenturl>0)
	{
		currenturl=currenturl-1;
	}
	else
	{
		currenturl=4;
	}
	picture[0].src=links[currenturl];
}