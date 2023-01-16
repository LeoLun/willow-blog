<script setup lang="ts">

</script>
<template>
  <div class="header-container">
    <div class="space">
      <div class="solar-syst">
        <div class="sun"></div>
        <div class="mercury"></div>
        <div class="venus"></div>
        <div class="earth"></div>
        <div class="mars"></div>
        <div class="jupiter"></div>
        <div class="saturn"></div>
        <div class="uranus"></div>
        <div class="neptune"></div>
        <div class="pluto"></div>
        <div class="asteroids-belt"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-container {
  position: relative;
  display: none;
  height: calc(30vh + var(--vp-nav-height));
  background: radial-gradient(ellipse at bottom, #303a49 0, #151628 100%);
  z-index: -1;
  overflow: hidden;

  @media (min-width: 960px) {
    display: block;
  }
}

.space .solar-syst {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  color: #fff;
  background-attachment: fixed
}

.space .solar-syst:after {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  top: -2px;
  background: #fff;
  box-shadow: 1652px 589px 0 0 rgba(255, 255, 255, .754), 1022px 232px 0 0 rgba(255, 255, 255, .151), 672px 399px 0 0 rgba(255, 255, 255, .486), 1451px 1656px 0 0 rgba(255, 255, 255, .309), 1688px 755px 0 0 rgba(255, 255, 255, .58), 725px 1687px 0 0 rgba(255, 255, 255, .206), 123px 1013px 0 0 rgba(255, 255, 255, .781), 352px 1401px 0 0 rgba(255, 255, 255, .894), 553px 446px 0 0 rgba(255, 255, 255, .693), 1152px 320px 0 0 rgba(255, 255, 255, .378), 716px 110px 0 0 rgba(255, 255, 255, .941), 1698px 111px 0 0 rgba(255, 255, 255, .662), 694px 1116px 0 0 rgba(255, 255, 255, .097), 947px 1582px 0 0 rgba(255, 255, 255, .509), 351px 1518px 0 0 rgba(255, 255, 255, .629), 236px 549px 0 0 rgba(255, 255, 255, .879), 1624px 24px 0 0 rgba(255, 255, 255, .186), 1323px 1665px 0 0 rgba(255, 255, 255, .939), 1209px 1001px 0 0 rgba(255, 255, 255, .039), 1507px 1476px 0 0 rgba(255, 255, 255, .09), 497px 1771px 0 0 rgba(255, 255, 255, .88), 1141px 1382px 0 0 rgba(255, 255, 255, .369), 1188px 959px 0 0 rgba(255, 255, 255, .465), 1754px 842px 0 0 rgba(255, 255, 255, .812), 1473px 543px 0 0 rgba(255, 255, 255, .568), 1321px 1363px 0 0 rgba(255, 255, 255, .678), 883px 1568px 0 0 rgba(255, 255, 255, .832), 1573px 758px 0 0 rgba(255, 255, 255, .371), 953px 797px 0 0 rgba(255, 255, 255, .093), 1794px 1211px 0 0 rgba(255, 255, 255, .461), 1052px 512px 0 0 rgba(255, 255, 255, .677), 229px 589px 0 0 rgba(255, 255, 255, .721), 476px 1438px 0 0 rgba(255, 255, 255, .898), 1009px 23px 0 0 rgba(255, 255, 255, .54), 1305px 1328px 0 0 rgba(255, 255, 255, .048), 487px 1790px 0 0 rgba(255, 255, 255, .884), 798px 1136px 0 0 rgba(255, 255, 255, .368), 498px 792px 0 0 rgba(255, 255, 255, .469), 1458px 1549px 0 0 rgba(255, 255, 255, .495), 174px 51px 0 0 rgba(255, 255, 255, .142), 983px 1401px 0 0 rgba(255, 255, 255, .047), 874px 759px 0 0 rgba(255, 255, 255, .854), 707px 1623px 0 0 rgba(255, 255, 255, .998), 1510px 94px 0 0 rgba(255, 255, 255, .486), 1328px 108px 0 0 rgba(255, 255, 255, .372), 58px 1602px 0 0 rgba(255, 255, 255, .237), 757px 985px 0 0 rgba(255, 255, 255, .801), 1177px 1273px 0 0 rgba(255, 255, 255, .779), 1094px 1421px 0 0 rgba(255, 255, 255, .798), 312px 44px 0 0 rgba(255, 255, 255, .15), 1349px 814px 0 0 rgba(255, 255, 255, .153), 988px 1267px 0 0 rgba(255, 255, 255, .031), 1126px 910px 0 0 rgba(255, 255, 255, .341), 513px 733px 0 0 rgba(255, 255, 255, .496), 1486px 1238px 0 0 rgba(255, 255, 255, .718), 1654px 185px 0 0 rgba(255, 255, 255, .821), 1135px 220px 0 0 rgba(255, 255, 255, .653), 853px 1504px 0 0 rgba(255, 255, 255, .761), 1610px 319px 0 0 rgba(255, 255, 255, .972), 969px 718px 0 0 rgba(255, 255, 255, .187), 1036px 93px 0 0 rgba(255, 255, 255, .226), 712px 999px 0 0 rgba(255, 255, 255, .161), 690px 457px 0 0 rgba(255, 255, 255, .958), 1793px 841px 0 0 rgba(255, 255, 255, .788), 1387px 1609px 0 0 rgba(255, 255, 255, .112), 1027px 1613px 0 0 rgba(255, 255, 255, .745), 1793px 1008px 0 0 rgba(255, 255, 255, .836), 84px 16px 0 0 rgba(255, 255, 255, .007), 63px 554px 0 0 rgba(255, 255, 255, .063), 1583px 1417px 0 0 rgba(255, 255, 255, .692), 968px 910px 0 0 rgba(255, 255, 255, .601), 860px 83px 0 0 rgba(255, 255, 255, .171), 1101px 1698px 0 0 rgba(255, 255, 255, .877), 322px 1404px 0 0 rgba(255, 255, 255, .635), 1101px 1562px 0 0 rgba(255, 255, 255, .142), 391px 1273px 0 0 rgba(255, 255, 255, .989), 763px 290px 0 0 rgba(255, 255, 255, .496), 1113px 1025px 0 0 rgba(255, 255, 255, .253), 1084px 1123px 0 0 rgba(255, 255, 255, .517), 708px 547px 0 0 rgba(255, 255, 255, .271), 796px 24px 0 0 rgba(255, 255, 255, .221), 922px 1523px 0 0 rgba(255, 255, 255, .848), 566px 1298px 0 0 rgba(255, 255, 255, .182), 1218px 554px 0 0 rgba(255, 255, 255, .824), 1121px 1546px 0 0 rgba(255, 255, 255, .605), 1209px 1347px 0 0 rgba(255, 255, 255, .177), 316px 1192px 0 0 rgba(255, 255, 255, .52), 1085px 1058px 0 0 rgba(255, 255, 255, .71), 502px 1557px 0 0 rgba(255, 255, 255, .564), 170px 260px 0 0 rgba(255, 255, 255, .68), 348px 294px 0 0 rgba(255, 255, 255, .164), 81px 598px 0 0 rgba(255, 255, 255, .06), 207px 915px 0 0 rgba(255, 255, 255, .923), 204px 1028px 0 0 rgba(255, 255, 255, .239), 1500px 264px 0 0 rgba(255, 255, 255, .149), 1264px 551px 0 0 rgba(255, 255, 255, .384), 148px 869px 0 0 rgba(255, 255, 255, .357), 891px 1415px 0 0 rgba(255, 255, 255, .215), 469px 1161px 0 0 rgba(255, 255, 255, .988), 614px 1px 0 0 rgba(255, 255, 255, .683), 1513px 352px 0 0 rgba(255, 255, 255, .954), 1197px 405px 0 0 rgba(255, 255, 255, .398), 1054px 215px 0 0 rgba(255, 255, 255, .341), 301px 1488px 0 0 rgba(255, 255, 255, .042), 826px 608px 0 0 rgba(255, 255, 255, .857), 1193px 1644px 0 0 rgba(255, 255, 255, .841), 1615px 1179px 0 0 rgba(255, 255, 255, .786), 1220px 821px 0 0 rgba(255, 255, 255, .178), 1396px 56px 0 0 rgba(255, 255, 255, .108), 368px 368px 0 0 rgba(255, 255, 255, .354), 681px 1689px 0 0 rgba(255, 255, 255, .165), 259px 777px 0 0 rgba(255, 255, 255, .569), 535px 332px 0 0 rgba(255, 255, 255, .257), 1137px 611px 0 0 rgba(255, 255, 255, .999), 1426px 1301px 0 0 rgba(255, 255, 255, .206), 1562px 322px 0 0 rgba(255, 255, 255, .615), 1588px 1498px 0 0 rgba(255, 255, 255, .646), 1636px 547px 0 0 rgba(255, 255, 255, .55), 1742px 1380px 0 0 rgba(255, 255, 255, .38), 377px 141px 0 0 rgba(255, 255, 255, .311), 434px 903px 0 0 rgba(255, 255, 255, .087), 480px 866px 0 0 rgba(255, 255, 255, .899), 1369px 1768px 0 0 rgba(255, 255, 255, .528), 1069px 1275px 0 0 rgba(255, 255, 255, .248), 556px 1505px 0 0 rgba(255, 255, 255, .918), 1734px 1431px 0 0 rgba(255, 255, 255, .042), 1562px 519px 0 0 rgba(255, 255, 255, .319), 1334px 1267px 0 0 rgba(255, 255, 255, .469), 699px 579px 0 0 rgba(255, 255, 255, .086), 966px 837px 0 0 rgba(255, 255, 255, .044), 1036px 1712px 0 0 rgba(255, 255, 255, .774), 466px 1800px 0 0 rgba(255, 255, 255, .032), 1266px 1503px 0 0 rgba(255, 255, 255, .093), 1077px 857px 0 0 rgba(255, 255, 255, .76), 1309px 633px 0 0 rgba(255, 255, 255, .242), 658px 1385px 0 0 rgba(255, 255, 255, .208), 194px 1539px 0 0 rgba(255, 255, 255, .777), 1011px 1091px 0 0 rgba(255, 255, 255, .475), 118px 315px 0 0 rgba(255, 255, 255, .508), 463px 649px 0 0 rgba(255, 255, 255, .548), 714px 643px 0 0 rgba(255, 255, 255, .934), 570px 491px 0 0 rgba(255, 255, 255, .839), 671px 1799px 0 0 rgba(255, 255, 255, .415), 508px 1454px 0 0 rgba(255, 255, 255, .804), 827px 970px 0 0 rgba(255, 255, 255, .748), 684px 771px 0 0 rgba(255, 255, 255, .642), 703px 803px 0 0 rgba(255, 255, 255, .576), 750px 1768px 0 0 rgba(255, 255, 255, .701), 819px 673px 0 0 rgba(255, 255, 255, .162), 1316px 839px 0 0 rgba(255, 255, 255, .806), 804px 1112px 0 0 rgba(255, 255, 255, .089), 192px 125px 0 0 rgba(255, 255, 255, .777), 1056px 1158px 0 0 rgba(255, 255, 255, .827), 1218px 20px 0 0 rgba(255, 255, 255, .866), 414px 607px 0 0 rgba(255, 255, 255, .355), 822px 1484px 0 0 rgba(255, 255, 255, .524), 600px 53px 0 0 rgba(255, 255, 255, .01), 345px 59px 0 0 rgba(255, 255, 255, .424), 740px 1795px 0 0 rgba(255, 255, 255, .126), 1777px 1168px 0 0 rgba(255, 255, 255, .707), 1051px 1419px 0 0 rgba(255, 255, 255, .205), 299px 1514px 0 0 rgba(255, 255, 255, .869), 414px 1211px 0 0 rgba(255, 255, 255, .12), 899px 1463px 0 0 rgba(255, 255, 255, .4), 905px 1695px 0 0 rgba(255, 255, 255, .312), 1517px 656px 0 0 rgba(255, 255, 255, .099), 853px 1296px 0 0 rgba(255, 255, 255, .01), 1470px 1611px 0 0 rgba(255, 255, 255, .832), 116px 203px 0 0 rgba(255, 255, 255, .576), 1153px 1180px 0 0 rgba(255, 255, 255, .857), 1171px 140px 0 0 rgba(255, 255, 255, .919), 565px 1143px 0 0 rgba(255, 255, 255, .039), 749px 312px 0 0 rgba(255, 255, 255, .214), 972px 1739px 0 0 rgba(255, 255, 255, .628), 541px 1670px 0 0 rgba(255, 255, 255, .969), 1331px 1617px 0 0 rgba(255, 255, 255, .675), 1326px 439px 0 0 rgba(255, 255, 255, .983), 1483px 228px 0 0 rgba(255, 255, 255, .78), 1576px 916px 0 0 rgba(255, 255, 255, .132), 1486px 894px 0 0 rgba(255, 255, 255, .834), 1253px 418px 0 0 rgba(255, 255, 255, .974), 812px 435px 0 0 rgba(255, 255, 255, .255), 650px 1512px 0 0 rgba(255, 255, 255, .033), 1222px 390px 0 0 rgba(255, 255, 255, .802), 733px 1249px 0 0 rgba(255, 255, 255, .815), 391px 186px 0 0 rgba(255, 255, 255, .193), 699px 673px 0 0 rgba(255, 255, 255, .809), 1058px 203px 0 0 rgba(255, 255, 255, .334), 302px 467px 0 0 rgba(255, 255, 255, .656), 178px 311px 0 0 rgba(255, 255, 255, .994), 1257px 744px 0 0 rgba(255, 255, 255, .185), 1596px 1367px 0 0 rgba(255, 255, 255, .372), 279px 712px 0 0 rgba(255, 255, 255, .419), 1430px 815px 0 0 rgba(255, 255, 255, .294), 1398px 1052px 0 0 rgba(255, 255, 255, .577), 1708px 1473px 0 0 rgba(255, 255, 255, .274), 5px 1107px 0 0 rgba(255, 255, 255, .958), 211px 876px 0 0 rgba(255, 255, 255, .903), 1438px 370px 0 0 rgba(255, 255, 255, .584), 243px 130px 0 0 rgba(255, 255, 255, .542), 611px 524px 0 0 rgba(255, 255, 255, .379), 311px 1310px 0 0 rgba(255, 255, 255, .057), 1114px 979px 0 0 rgba(255, 255, 255, .277), 773px 1040px 0 0 rgba(255, 255, 255, .118), 131px 759px 0 0 rgba(255, 255, 255, .463), 1756px 1151px 0 0 rgba(255, 255, 255, .007), 686px 1408px 0 0 rgba(255, 255, 255, .818), 1185px 568px 0 0 rgba(255, 255, 255, .286), 1062px 677px 0 0 rgba(255, 255, 255, .658), 1433px 133px 0 0 rgba(255, 255, 255, .714), 1130px 1113px 0 0 rgba(255, 255, 255, .372), 1042px 229px 0 0 rgba(255, 255, 255, .326), 643px 782px 0 0 rgba(255, 255, 255, .952), 399px 1738px 0 0 rgba(255, 255, 255, .061), 1372px 1695px 0 0 rgba(255, 255, 255, .983), 648px 1193px 0 0 rgba(255, 255, 255, .983), 1372px 1248px 0 0 rgba(255, 255, 255, .697), 1186px 903px 0 0 rgba(255, 255, 255, .27), 1015px 1206px 0 0 rgba(255, 255, 255, .676), 309px 846px 0 0 rgba(255, 255, 255, .858), 48px 1229px 0 0 rgba(255, 255, 255, .129), 952px 985px 0 0 rgba(255, 255, 255, .433), 1561px 843px 0 0 rgba(255, 255, 255, .729), 1347px 1177px 0 0 rgba(255, 255, 255, .419), 1609px 1187px 0 0 rgba(255, 255, 255, .189), 627px 65px 0 0 rgba(255, 255, 255, .811), 1022px 1241px 0 0 rgba(255, 255, 255, .426), 1613px 955px 0 0 rgba(255, 255, 255, .085), 391px 695px 0 0 rgba(255, 255, 255, .576), 1518px 649px 0 0 rgba(255, 255, 255, .217), 855px 194px 0 0 rgba(255, 255, 255, .344), 965px 1617px 0 0 rgba(255, 255, 255, .871), 891px 147px 0 0 rgba(255, 255, 255, .373), 725px 821px 0 0 rgba(255, 255, 255, .447), 982px 85px 0 0 rgba(255, 255, 255, .044), 1570px 1044px 0 0 rgba(255, 255, 255, .034), 1638px 1070px 0 0 rgba(255, 255, 255, .792), 8px 1307px 0 0 rgba(255, 255, 255, .016), 1264px 105px 0 0 rgba(255, 255, 255, .992), 408px 682px 0 0 rgba(255, 255, 255, .528), 876px 827px 0 0 rgba(255, 255, 255, .776), 258px 1766px 0 0 rgba(255, 255, 255, .703), 845px 1418px 0 0 rgba(255, 255, 255, .277), 154px 982px 0 0 rgba(255, 255, 255, .572), 1542px 1436px 0 0 rgba(255, 255, 255, .423), 81px 284px 0 0 rgba(255, 255, 255, .929), 33px 862px 0 0 rgba(255, 255, 255, .299), 892px 1384px 0 0 rgba(255, 255, 255, .71), 161px 1464px 0 0 rgba(255, 255, 255, .807), 970px 1585px 0 0 rgba(255, 255, 255, .789), 1024px 752px 0 0 rgba(255, 255, 255, .024), 2px 874px 0 0 rgba(255, 255, 255, .249), 336px 1645px 0 0 rgba(255, 255, 255, .847), 1388px 612px 0 0 rgba(255, 255, 255, .446), 511px 353px 0 0 rgba(255, 255, 255, .373), 805px 399px 0 0 rgba(255, 255, 255, .674), 1414px 105px 0 0 rgba(255, 255, 255, .331), 767px 1700px 0 0 rgba(255, 255, 255, .07), 742px 13px 0 0 rgba(255, 255, 255, .493), 806px 961px 0 0 rgba(255, 255, 255, .294), 256px 190px 0 0 rgba(255, 255, 255, .352), 678px 585px 0 0 rgba(255, 255, 255, .756), 1695px 1042px 0 0 rgba(255, 255, 255, .579), 1332px 930px 0 0 rgba(255, 255, 255, .791), 1359px 1443px 0 0 rgba(255, 255, 255, .345), 1214px 91px 0 0 rgba(255, 255, 255, .2), 81px 4px 0 0 rgba(255, 255, 255, .198), 1372px 127px 0 0 rgba(255, 255, 255, .531), 526px 1167px 0 0 rgba(255, 255, 255, .152), 848px 1113px 0 0 rgba(255, 255, 255, .57), 1633px 690px 0 0 rgba(255, 255, 255, .555), 842px 515px 0 0 rgba(255, 255, 255, .843), 1345px 332px 0 0 rgba(255, 255, 255, .048), 202px 16px 0 0 rgba(255, 255, 255, .342), 25px 422px 0 0 rgba(255, 255, 255, .46), 1603px 1192px 0 0 rgba(255, 255, 255, .598), 767px 906px 0 0 rgba(255, 255, 255, .927), 972px 1258px 0 0 rgba(255, 255, 255, .939), 1374px 1670px 0 0 rgba(255, 255, 255, .388), 558px 588px 0 0 rgba(255, 255, 255, .037), 458px 643px 0 0 rgba(255, 255, 255, .393), 556px 877px 0 0 rgba(255, 255, 255, .451), 926px 61px 0 0 rgba(255, 255, 255, .291), 1457px 43px 0 0 rgba(255, 255, 255, .098), 406px 374px 0 0 rgba(255, 255, 255, .419), 106px 1661px 0 0 rgba(255, 255, 255, .191), 920px 1790px 0 0 rgba(255, 255, 255, .09), 843px 249px 0 0 rgba(255, 255, 255, .857), 1258px 994px 0 0 rgba(255, 255, 255, .037), 277px 539px 0 0 rgba(255, 255, 255, .131), 1233px 1413px 0 0 rgba(255, 255, 255, .144), 1394px 512px 0 0 rgba(255, 255, 255, .454), 1119px 694px 0 0 rgba(255, 255, 255, .143), 1483px 1508px 0 0 rgba(255, 255, 255, .016), 199px 544px 0 0 rgba(255, 255, 255, .451), 764px 1169px 0 0 rgba(255, 255, 255, .218), 13px 1256px 0 0 rgba(255, 255, 255, .096), 1373px 211px 0 0 rgba(255, 255, 255, .717), 1635px 344px 0 0 rgba(255, 255, 255, .64), 1616px 1140px 0 0 rgba(255, 255, 255, .113), 920px 1627px 0 0 rgba(255, 255, 255, .234), 766px 1788px 0 0 rgba(255, 255, 255, .351), 187px 1403px 0 0 rgba(255, 255, 255, .179), 45px 1030px 0 0 rgba(255, 255, 255, .365), 1742px 634px 0 0 rgba(255, 255, 255, .839), 616px 1554px 0 0 rgba(255, 255, 255, .244), 1424px 1418px 0 0 rgba(255, 255, 255, .127), 658px 1337px 0 0 rgba(255, 255, 255, .339), 358px 793px 0 0 rgba(255, 255, 255, .044), 1200px 318px 0 0 rgba(255, 255, 255, .143), 848px 435px 0 0 rgba(255, 255, 255, .856), 679px 170px 0 0 rgba(255, 255, 255, .075), 382px 1214px 0 0 rgba(255, 255, 255, .063), 524px 603px 0 0 rgba(255, 255, 255, .244), 88px 898px 0 0 rgba(255, 255, 255, .407), 1793px 650px 0 0 rgba(255, 255, 255, .261), 492px 1246px 0 0 rgba(255, 255, 255, .141), 1597px 169px 0 0 rgba(255, 255, 255, .017), 1138px 1741px 0 0 rgba(255, 255, 255, .132), 222px 1426px 0 0 rgba(255, 255, 255, .196), 272px 1707px 0 0 rgba(255, 255, 255, .115), 1433px 1692px 0 0 rgba(255, 255, 255, .064), 1626px 471px 0 0 rgba(255, 255, 255, .001), 1698px 315px 0 0 rgba(255, 255, 255, .43), 185px 365px 0 0 rgba(255, 255, 255, .216), 1783px 570px 0 0 rgba(255, 255, 255, .212), 1167px 336px 0 0 rgba(255, 255, 255, .502), 1538px 732px 0 0 rgba(255, 255, 255, .18), 1201px 706px 0 0 rgba(255, 255, 255, .12), 96px 492px 0 0 rgba(255, 255, 255, .513), 1418px 1459px 0 0 rgba(255, 255, 255, .162), 1408px 941px 0 0 rgba(255, 255, 255, .357), 344px 562px 0 0 rgba(255, 255, 255, .056), 1221px 1431px 0 0 rgba(255, 255, 255, .238), 413px 1787px 0 0 rgba(255, 255, 255, .743), 1435px 562px 0 0 rgba(255, 255, 255, .162), 1774px 1645px 0 0 rgba(255, 255, 255, .256), 1251px 187px 0 0 rgba(255, 255, 255, .168), 1776px 1078px 0 0 rgba(255, 255, 255, .112), 1038px 1337px 0 0 rgba(255, 255, 255, .223), 1397px 1517px 0 0 rgba(255, 255, 255, .041), 1317px 707px 0 0 rgba(255, 255, 255, .882), 1605px 1592px 0 0 rgba(255, 255, 255, .074), 1116px 183px 0 0 rgba(255, 255, 255, .487), 1583px 651px 0 0 rgba(255, 255, 255, .373), 1783px 1659px 0 0 rgba(255, 255, 255, .253), 934px 1511px 0 0 rgba(255, 255, 255, .779), 882px 813px 0 0 rgba(255, 255, 255, .107), 1482px 1688px 0 0 rgba(255, 255, 255, .667), 728px 1449px 0 0 rgba(255, 255, 255, .767), 1474px 1094px 0 0 rgba(255, 255, 255, .659), 1537px 325px 0 0 rgba(255, 255, 255, .587), 1634px 1110px 0 0 rgba(255, 255, 255, .079), 880px 1412px 0 0 rgba(255, 255, 255, .485), 1261px 880px 0 0 rgba(255, 255, 255, .167), 496px 1279px 0 0 rgba(255, 255, 255, .647), 192px 986px 0 0 rgba(255, 255, 255, .486), 1479px 1089px 0 0 rgba(255, 255, 255, .055), 1404px 60px 0 0 rgba(255, 255, 255, .318), 451px 639px 0 0 rgba(255, 255, 255, .8), 335px 1027px 0 0 rgba(255, 255, 255, .502), 1630px 1108px 0 0 rgba(255, 255, 255, .863), 740px 1310px 0 0 rgba(255, 255, 255, .148), 977px 1144px 0 0 rgba(255, 255, 255, .482), 557px 1312px 0 0 rgba(255, 255, 255, .715), 573px 791px 0 0 rgba(255, 255, 255, .825), 1594px 774px 0 0 rgba(255, 255, 255, .426), 715px 773px 0 0 rgba(255, 255, 255, .144), 1507px 1657px 0 0 rgba(255, 255, 255, .572), 872px 381px 0 0 rgba(255, 255, 255, .934), 1124px 446px 0 0 rgba(255, 255, 255, .155), 1695px 2px 0 0 rgba(255, 255, 255, .305), 298px 681px 0 0 rgba(255, 255, 255, .055), 1322px 406px 0 0 rgba(255, 255, 255, .971), 1321px 1229px 0 0 rgba(255, 255, 255, .014), 455px 344px 0 0 rgba(255, 255, 255, .928), 769px 820px 0 0 rgba(255, 255, 255, .318), 1197px 258px 0 0 rgba(255, 255, 255, .813), 654px 138px 0 0 rgba(255, 255, 255, .288), 1568px 115px 0 0 rgba(255, 255, 255, .171), 996px 1239px 0 0 rgba(255, 255, 255, .491), 1394px 316px 0 0 rgba(255, 255, 255, .357), 891px 768px 0 0 rgba(255, 255, 255, .688), 779px 655px 0 0 rgba(255, 255, 255, .727), 1374px 219px 0 0 rgba(255, 255, 255, .941), 240px 642px 0 0 rgba(255, 255, 255, .919), 362px 1054px 0 0 rgba(255, 255, 255, .73), 182px 1281px 0 0 rgba(255, 255, 255, .268), 485px 490px 0 0 rgba(255, 255, 255, .424), 1510px 1153px 0 0 rgba(255, 255, 255, .646), 1639px 860px 0 0 rgba(255, 255, 255, .797), 170px 885px 0 0 rgba(255, 255, 255, .986), 828px 555px 0 0 rgba(255, 255, 255, .262), 62px 838px 0 0 rgba(255, 255, 255, .092), 1660px 1674px 0 0 rgba(255, 255, 255, .131), 681px 685px 0 0 rgba(255, 255, 255, .74), 267px 1197px 0 0 rgba(255, 255, 255, .064), 94px 1328px 0 0 rgba(255, 255, 255, .706), 1718px 890px 0 0 rgba(255, 255, 255, .6), 493px 1429px 0 0 rgba(255, 255, 255, .623), 186px 1552px 0 0 rgba(255, 255, 255, .864), 1259px 833px 0 0 rgba(255, 255, 255, .911), 220px 784px 0 0 rgba(255, 255, 255, .388), 1285px 408px 0 0 rgba(255, 255, 255, .434), 1709px 1043px 0 0 rgba(255, 255, 255, .851), 276px 35px 0 0 rgba(255, 255, 255, .666), 211px 347px 0 0 rgba(255, 255, 255, .875), 1698px 516px 0 0 rgba(255, 255, 255, .451), 1721px 1214px 0 0 rgba(255, 255, 255, .807), 1631px 918px 0 0 rgba(255, 255, 255, .741), 1036px 1059px 0 0 rgba(255, 255, 255, .518), 966px 1648px 0 0 rgba(255, 255, 255, .609), 223px 1588px 0 0 rgba(255, 255, 255, .173), 132px 744px 0 0 rgba(255, 255, 255, .153), 1738px 833px 0 0 rgba(255, 255, 255, .215), 908px 611px 0 0 rgba(255, 255, 255, .955), 1211px 84px 0 0 rgba(255, 255, 255, .284), 1127px 1159px 0 0 rgba(255, 255, 255, .393), 1353px 1670px 0 0 rgba(255, 255, 255, .337), 213px 1514px 0 0 rgba(255, 255, 255, .061), 1339px 1709px 0 0 rgba(255, 255, 255, .131), 570px 1577px 0 0 rgba(255, 255, 255, .067), 1666px 10px 0 0 rgba(255, 255, 255, .107), 334px 626px 0 0 rgba(255, 255, 255, .052), 881px 958px 0 0 rgba(255, 255, 255, .111), 882px 368px 0 0 rgba(255, 255, 255, .056), 1599px 840px 0 0 rgba(255, 255, 255, .73), 1173px 1176px 0 0 rgba(255, 255, 255, .321), 1128px 194px 0 0 rgba(255, 255, 255, .514), 408px 1085px 0 0 rgba(255, 255, 255, .925), 1374px 1322px 0 0 rgba(255, 255, 255, .013), 68px 1798px 0 0 rgba(255, 255, 255, .727), 1657px 1583px 0 0 rgba(255, 255, 255, .515), 1783px 706px 0 0 rgba(255, 255, 255, .422), 70px 1547px 0 0 rgba(255, 255, 255, .463), 403px 293px 0 0 rgba(255, 255, 255, .749), 1731px 300px 0 0 rgba(255, 255, 255, .411), 127px 303px 0 0 rgba(255, 255, 255, .172), 342px 1765px 0 0 rgba(255, 255, 255, .703), 1555px 757px 0 0 rgba(255, 255, 255, .719), 334px 140px 0 0 rgba(255, 255, 255, .516), 1609px 421px 0 0 rgba(255, 255, 255, .263), 1511px 817px 0 0 rgba(255, 255, 255, .644), 1109px 975px 0 0 rgba(255, 255, 255, .473), 1779px 440px 0 0 rgba(255, 255, 255, .355), 1487px 394px 0 0 rgba(255, 255, 255, .028), 1078px 1627px 0 0 rgba(255, 255, 255, .495), 119px 1082px 0 0 rgba(255, 255, 255, .268), 177px 892px 0 0 rgba(255, 255, 255, .337), 1431px 1042px 0 0 rgba(255, 255, 255, .535), 1587px 1455px 0 0 rgba(255, 255, 255, .557), 376px 690px 0 0 rgba(255, 255, 255, .087), 553px 594px 0 0 rgba(255, 255, 255, .037), 307px 1611px 0 0 rgba(255, 255, 255, .16), 61px 1705px 0 0 rgba(255, 255, 255, .581), 432px 700px 0 0 rgba(255, 255, 255, .542), 1000px 925px 0 0 rgba(255, 255, 255, .552), 1320px 1390px 0 0 rgba(255, 255, 255, .179), 1402px 1184px 0 0 rgba(255, 255, 255, .303), 309px 1037px 0 0 rgba(255, 255, 255, .402), 101px 218px 0 0 rgba(255, 255, 255, .647), 1765px 480px 0 0 rgba(255, 255, 255, .47), 645px 1791px 0 0 rgba(255, 255, 255, .074), 523px 823px 0 0 rgba(255, 255, 255, .193), 746px 1110px 0 0 rgba(255, 255, 255, .8), 1563px 571px 0 0 rgba(255, 255, 255, .736), 1684px 760px 0 0 rgba(255, 255, 255, .776), 94px 1398px 0 0 rgba(255, 255, 255, .914), 1244px 133px 0 0 rgba(255, 255, 255, .938), 1273px 205px 0 0 rgba(255, 255, 255, .267), 1064px 1280px 0 0 rgba(255, 255, 255, .977), 926px 539px 0 0 rgba(255, 255, 255, .658), 1743px 976px 0 0 rgba(255, 255, 255, .156), 651px 1568px 0 0 rgba(255, 255, 255, .376), 265px 551px 0 0 rgba(255, 255, 255, .045), 74px 1467px 0 0 rgba(255, 255, 255, .578), 1118px 641px 0 0 rgba(255, 255, 255, .001), 734px 396px 0 0 rgba(255, 255, 255, .838), 636px 1638px 0 0 rgba(255, 255, 255, .342), 914px 641px 0 0 rgba(255, 255, 255, .266), 1638px 1058px 0 0 rgba(255, 255, 255, .027), 874px 192px 0 0 rgba(255, 255, 255, .539), 507px 1486px 0 0 rgba(255, 255, 255, .917), 695px 1036px 0 0 rgba(255, 255, 255, .132), 1088px 761px 0 0 rgba(255, 255, 255, .678), 760px 1248px 0 0 rgba(255, 255, 255, .798), 507px 1379px 0 0 rgba(255, 255, 255, .157), 263px 965px 0 0 rgba(255, 255, 255, .034), 192px 1122px 0 0 rgba(255, 255, 255, .411), 1200px 125px 0 0 rgba(255, 255, 255, .514), 36px 327px 0 0 rgba(255, 255, 255, .87), 1629px 1757px 0 0 rgba(255, 255, 255, .852), 1274px 443px 0 0 rgba(255, 255, 255, .389), 960px 255px 0 0 rgba(255, 255, 255, .149), 1518px 1727px 0 0 rgba(255, 255, 255, .786), 1781px 732px 0 0 rgba(255, 255, 255, .006), 988px 2px 0 0 rgba(255, 255, 255, .815), 55px 742px 0 0 rgba(255, 255, 255, .204), 964px 562px 0 0 rgba(255, 255, 255, .873), 630px 1683px 0 0 rgba(255, 255, 255, .226);
  border-radius: 100px
}

.space .solar-syst div {
  border-radius: 1000px;
  top: 55%;
  left: 50%;
  position: absolute;
  z-index: 999
}

.space .solar-syst div:not(.sun) {
  border: 1px solid rgba(102, 166, 229, .12)
}

.space .solar-syst div:not(.sun):before {
  left: 50%;
  border-radius: 100px;
  content: "";
  position: absolute
}

.space .solar-syst div:not(.asteroids-belt):before {
  box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, .25)
}

.space .sun {
  background: radial-gradient(ellipse at center, #ffd000 1%, #f9b700 39%, #f9b700 39%, #e06317 100%) -28px -103px;
  height: 40px;
  width: 40px;
  margin-top: -20px;
  margin-left: -20px;
  background-clip: padding-box;
  border: 0 !important;
  background-size: 175%;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, .4), 0 0 22px 11px rgba(255, 203, 0, .13)
}

.space .mercury {
  height: 70px;
  width: 70px;
  margin-top: -35px;
  margin-left: -35px;
  -webkit-animation: orb 7.18673s linear infinite;
  animation: orb 7.18673s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .mercury:before {
  height: 4px;
  width: 4px;
  background: #9f5e26;
  margin-top: -2px;
  margin-left: -2px
}

.space .venus {
  height: 100px;
  width: 100px;
  margin-top: -50px;
  margin-left: -50px;
  -webkit-animation: orb 18.45553s linear infinite;
  animation: orb 18.45553s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .venus:before {
  height: 8px;
  width: 8px;
  background: #BEB768;
  margin-top: -4px;
  margin-left: -4px
}

.space .earth {
  height: 145px;
  width: 145px;
  margin-top: -72.5px;
  margin-left: -72.5px;
  -webkit-animation: orb 30s linear infinite;
  animation: orb 30s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .earth:before {
  height: 6px;
  width: 6px;
  background: #11abe9;
  margin-top: -3px;
  margin-left: -3px
}

.space .earth:after {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 50%;
  top: 0;
  margin-left: -9px;
  margin-top: -9px;
  border-radius: 100px;
  box-shadow: 0 -10px 0 -8px grey;
  -webkit-animation: orb 2.24404s linear infinite;
  animation: orb 2.24404s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .mars {
  height: 190px;
  width: 190px;
  margin-top: -95px;
  margin-left: -95px;
  -webkit-animation: orb 56.42613s linear infinite;
  animation: orb 56.42613s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .mars:before {
  height: 6px;
  width: 6px;
  background: #cf3921;
  margin-top: -3px;
  margin-left: -3px
}

.space .jupiter {
  height: 340px;
  width: 340px;
  margin-top: -170px;
  margin-left: -170px;
  -webkit-animation: orb 355.72282s linear infinite;
  animation: orb 355.72282s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .jupiter:before {
  height: 18px;
  width: 18px;
  background: #c76e2a;
  margin-top: -9px;
  margin-left: -9px
}

.space .saturn {
  height: 440px;
  width: 440px;
  margin-top: -220px;
  margin-left: -220px;
  -webkit-animation: orb 882.69525s linear infinite;
  animation: orb 882.69525s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .saturn:before {
  height: 12px;
  width: 12px;
  background: #e7c194;
  margin-top: -6px;
  margin-left: -6px
}

.space .saturn:after {
  position: absolute;
  content: "";
  height: 2.34%;
  width: 4.676%;
  left: 50%;
  top: 0;
  -webkit-transform: rotateZ(-52deg);
  transform: rotateZ(-52deg);
  margin-left: -2.3%;
  margin-top: -1.2%;
  border-radius: 50%;
  box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
  -webkit-animation: orb 882.69525s linear infinite;
  animation: orb 882.69525s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
  -webkit-transform-origin: 52% 60%;
  transform-origin: 52% 60%
}

.space .uranus {
  height: 520px;
  width: 520px;
  margin-top: -260px;
  margin-left: -260px;
  -webkit-animation: orb 2512.4002s linear infinite;
  animation: orb 2512.4002s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .uranus:before {
  height: 10px;
  width: 10px;
  background: #b5e3e3;
  margin-top: -5px;
  margin-left: -5px
}

.space .neptune {
  height: 630px;
  width: 630px;
  margin-top: -315px;
  margin-left: -315px;
  -webkit-animation: orb 4911.78386s linear infinite;
  animation: orb 4911.78386s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .neptune:before {
  height: 10px;
  width: 10px;
  background: #175e9e;
  margin-top: -5px;
  margin-left: -5px
}

.space .asteroids-belt {
  opacity: .7;
  border-color: transparent !important;
  height: 300px;
  width: 300px;
  margin-top: -150px;
  margin-left: -150px;
  -webkit-animation: orb 179.95583s linear infinite;
  animation: orb 179.95583s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s;
  overflow: hidden
}

.space .asteroids-belt:before {
  top: 50%;
  height: 210px;
  width: 210px;
  margin-left: -105px;
  margin-top: -105px;
  background: 0 0;
  border-radius: 140px !important;
  box-shadow: 33px -53px 0 -104px rgba(255, 255, 255, .28), 5px -17px 0 -104px rgba(255, 255, 255, .494), 113px -54px 0 -104px rgba(255, 255, 255, .586), -134px -73px 0 -104px rgba(255, 255, 255, .662), 101px 70px 0 -104px rgba(255, 255, 255, .387), -51px -90px 0 -104px rgba(255, 255, 255, .197), 8px -140px 0 -104px rgba(255, 255, 255, .516), -120px 139px 0 -104px rgba(255, 255, 255, .219), 85px 143px 0 -104px rgba(255, 255, 255, .123), -80px -42px 0 -104px rgba(255, 255, 255, .04), -106px 2px 0 -104px rgba(255, 255, 255, .83), -37px -40px 0 -104px rgba(255, 255, 255, .883), 61px 15px 0 -104px rgba(255, 255, 255, .15), -6px -130px 0 -104px rgba(255, 255, 255, .447), -50px -109px 0 -104px rgba(255, 255, 255, .09), -62px 106px 0 -104px rgba(255, 255, 255, .141), 139px -103px 0 -104px rgba(255, 255, 255, .359), -61px 88px 0 -104px rgba(255, 255, 255, .775), -34px -76px 0 -104px rgba(255, 255, 255, .313), -18px 114px 0 -104px rgba(255, 255, 255, .493), 64px 62px 0 -104px rgba(255, 255, 255, .426), 84px 82px 0 -104px rgba(255, 255, 255, .935), -92px 92px 0 -104px rgba(255, 255, 255, .714), 1px 90px 0 -104px rgba(255, 255, 255, .689), -64px -26px 0 -104px rgba(255, 255, 255, .252), 124px 101px 0 -104px rgba(255, 255, 255, .008), -37px -55px 0 -104px rgba(255, 255, 255, .557), -61px -37px 0 -104px rgba(255, 255, 255, .907), -118px -68px 0 -104px rgba(255, 255, 255, .557), 59px -106px 0 -104px rgba(255, 255, 255, .149), -7px -54px 0 -104px rgba(255, 255, 255, .641), -37px -28px 0 -104px rgba(255, 255, 255, .362), 145px 29px 0 -104px rgba(255, 255, 255, .398), 19px -76px 0 -104px rgba(255, 255, 255, .095), -63px -38px 0 -104px rgba(255, 255, 255, .845), 129px -16px 0 -104px rgba(255, 255, 255, .508), 124px 78px 0 -104px rgba(255, 255, 255, .549), -133px -113px 0 -104px rgba(255, 255, 255, .854), 51px -93px 0 -104px rgba(255, 255, 255, .123), 129px -48px 0 -104px rgba(255, 255, 255, .779), -62px 113px 0 -104px rgba(255, 255, 255, .671), 134px -24px 0 -104px rgba(255, 255, 255, .788), 90px -96px 0 -104px rgba(255, 255, 255, .954), 32px 70px 0 -104px rgba(255, 255, 255, .508), -126px 13px 0 -104px rgba(255, 255, 255, .144), 86px 122px 0 -104px rgba(255, 255, 255, .754), -107px 67px 0 -104px rgba(255, 255, 255, .436), -115px 110px 0 -104px rgba(255, 255, 255, .903), 34px 96px 0 -104px rgba(255, 255, 255, .618), 83px 96px 0 -104px rgba(255, 255, 255, .753), 71px 27px 0 -104px rgba(255, 255, 255, .57), -108px -12px 0 -104px rgba(255, 255, 255, .261), -80px -129px 0 -104px rgba(255, 255, 255, .086), 57px -21px 0 -104px rgba(255, 255, 255, .703), 59px -44px 0 -104px rgba(255, 255, 255, .97), -125px -31px 0 -104px rgba(255, 255, 255, .578), -58px -42px 0 -104px rgba(255, 255, 255, .622), 98px -114px 0 -104px rgba(255, 255, 255, .954), -118px 1px 0 -104px rgba(255, 255, 255, .284), -103px 36px 0 -104px rgba(255, 255, 255, .094), -96px 72px 0 -104px rgba(255, 255, 255, .083), -44px -116px 0 -104px rgba(255, 255, 255, .044), 55px -31px 0 -104px rgba(255, 255, 255, .45), -104px -140px 0 -104px rgba(255, 255, 255, .318), -121px 89px 0 -104px rgba(255, 255, 255, .33), 63px -102px 0 -104px rgba(255, 255, 255, .575), -42px 29px 0 -104px rgba(255, 255, 255, .627), 72px -31px 0 -104px rgba(255, 255, 255, .336), -72px 130px 0 -104px rgba(255, 255, 255, .884), -120px -29px 0 -104px rgba(255, 255, 255, .343), 47px 43px 0 -104px rgba(255, 255, 255, .356), -144px 93px 0 -104px rgba(255, 255, 255, .812), 2px 31px 0 -104px rgba(255, 255, 255, .489), 112px 97px 0 -104px rgba(255, 255, 255, .644), -1px -97px 0 -104px rgba(255, 255, 255, .978), 69px -120px 0 -104px rgba(255, 255, 255, .673), -42px -75px 0 -104px rgba(255, 255, 255, .928), 50px -67px 0 -104px rgba(255, 255, 255, .024), -62px 45px 0 -104px rgba(255, 255, 255, .377), -58px 35px 0 -104px rgba(255, 255, 255, .135), -51px 120px 0 -104px rgba(255, 255, 255, .443), 100px -25px 0 -104px rgba(255, 255, 255, .654), -44px 83px 0 -104px rgba(255, 255, 255, .673), 46px 111px 0 -104px rgba(255, 255, 255, .372), 95px 125px 0 -104px rgba(255, 255, 255, .489), 83px 46px 0 -104px rgba(255, 255, 255, .418), 60px 110px 0 -104px rgba(255, 255, 255, .26), 99px 86px 0 -104px rgba(255, 255, 255, .869), 33px -39px 0 -104px rgba(255, 255, 255, .216), 41px -2px 0 -104px rgba(255, 255, 255, .204), -74px 22px 0 -104px rgba(255, 255, 255, .213), 124px -92px 0 -104px rgba(255, 255, 255, .047), -96px -90px 0 -104px rgba(255, 255, 255, .331), 42px -112px 0 -104px rgba(255, 255, 255, .548), 57px -22px 0 -104px rgba(255, 255, 255, .578), 78px 80px 0 -104px rgba(255, 255, 255, .613), 62px 43px 0 -104px rgba(255, 255, 255, .042), -26px 24px 0 -104px rgba(255, 255, 255, .094), 38px 14px 0 -104px rgba(255, 255, 255, .129), 86px 45px 0 -104px rgba(255, 255, 255, .7), -98px 122px 0 -104px rgba(255, 255, 255, .44), 50px 121px 0 -104px rgba(255, 255, 255, .14), -95px 56px 0 -104px rgba(255, 255, 255, .529), -32px -118px 0 -104px rgba(255, 255, 255, .997), 143px -34px 0 -104px rgba(255, 255, 255, .794), -53px 89px 0 -104px rgba(255, 255, 255, .194), 75px 108px 0 -104px rgba(255, 255, 255, .486), 128px 28px 0 -104px rgba(255, 255, 255, .826), 139px 96px 0 -104px rgba(255, 255, 255, .036), -106px -33px 0 -104px rgba(255, 255, 255, .378), 67px -23px 0 -104px rgba(255, 255, 255, .737), -135px -35px 0 -104px rgba(255, 255, 255, .794), 52px 12px 0 -104px rgba(255, 255, 255, .227), -35px -46px 0 -104px rgba(255, 255, 255, .888), 70px -15px 0 -104px rgba(255, 255, 255, .595), -85px 65px 0 -104px rgba(255, 255, 255, .521), -68px -133px 0 -104px rgba(255, 255, 255, .869), -101px 90px 0 -104px rgba(255, 255, 255, .54), -137px -130px 0 -104px rgba(255, 255, 255, .059), 59px 19px 0 -104px rgba(255, 255, 255, .185), -61px 26px 0 -104px rgba(255, 255, 255, .441), -128px -86px 0 -104px rgba(255, 255, 255, .78), -39px -83px 0 -104px rgba(255, 255, 255, .88), -104px 75px 0 -104px rgba(255, 255, 255, .943), -45px -122px 0 -104px rgba(255, 255, 255, .21), -76px -135px 0 -104px rgba(255, 255, 255, .805), 83px -33px 0 -104px rgba(255, 255, 255, .315), 39px 93px 0 -104px rgba(255, 255, 255, .141), -58px -124px 0 -104px rgba(255, 255, 255, .362), -94px -144px 0 -104px rgba(255, 255, 255, .884), -55px -122px 0 -104px rgba(255, 255, 255, .299), 14px 34px 0 -104px rgba(255, 255, 255, .285), 24px -21px 0 -104px rgba(255, 255, 255, .692), -8px -134px 0 -104px rgba(255, 255, 255, .97), 102px 91px 0 -104px rgba(255, 255, 255, .084), 60px -54px 0 -104px rgba(255, 255, 255, .985), -132px -121px 0 -104px rgba(255, 255, 255, .504), -58px -28px 0 -104px rgba(255, 255, 255, .021), 119px -24px 0 -104px rgba(255, 255, 255, .434), 143px 57px 0 -104px rgba(255, 255, 255, .108), -65px 130px 0 -104px rgba(255, 255, 255, .59), 120px -26px 0 -104px rgba(255, 255, 255, .687), 16px -49px 0 -104px rgba(255, 255, 255, .097), -109px 87px 0 -104px rgba(255, 255, 255, .507), -23px -58px 0 -104px rgba(255, 255, 255, .567), -65px 88px 0 -104px rgba(255, 255, 255, .447), -49px 6px 0 -104px rgba(255, 255, 255, .079), -13px -98px 0 -104px rgba(255, 255, 255, .352), 79px -139px 0 -104px rgba(255, 255, 255, .08), -86px 139px 0 -104px rgba(255, 255, 255, .194), -74px 13px 0 -104px rgba(255, 255, 255, .683), 53px 14px 0 -104px rgba(255, 255, 255, .328), 37px -125px 0 -104px rgba(255, 255, 255, .344), 11px -94px 0 -104px rgba(255, 255, 255, .524), 80px -49px 0 -104px rgba(255, 255, 255, .485), -46px 100px 0 -104px rgba(255, 255, 255, .832), -14px -26px 0 -104px rgba(255, 255, 255, .096), 48px 61px 0 -104px rgba(255, 255, 255, .136), -132px -73px 0 -104px rgba(255, 255, 255, .836), 9px -58px 0 -104px rgba(255, 255, 255, .693), -51px 140px 0 -104px rgba(255, 255, 255, .273), 73px 68px 0 -104px rgba(255, 255, 255, .377), 9px 49px 0 -104px rgba(255, 255, 255, .061), -122px 71px 0 -104px rgba(255, 255, 255, .629), 121px 123px 0 -104px rgba(255, 255, 255, .365), -62px -49px 0 -104px rgba(255, 255, 255, .335), 19px -46px 0 -104px rgba(255, 255, 255, .664), -19px 20px 0 -104px rgba(255, 255, 255, .067), -104px 72px 0 -104px rgba(255, 255, 255, .439), 121px -62px 0 -104px rgba(255, 255, 255, .038), 130px 11px 0 -104px rgba(255, 255, 255, .735), -89px 46px 0 -104px rgba(255, 255, 255, .254), -74px 46px 0 -104px rgba(255, 255, 255, .823), 41px -109px 0 -104px rgba(255, 255, 255, .006), -113px 11px 0 -104px rgba(255, 255, 255, .253), -14px -36px 0 -104px rgba(255, 255, 255, .596), -72px -44px 0 -104px rgba(255, 255, 255, .661), 41px 35px 0 -104px rgba(255, 255, 255, .956), 47px -100px 0 -104px rgba(255, 255, 255, .861), 129px -95px 0 -104px rgba(255, 255, 255, .149), -99px 22px 0 -104px rgba(255, 255, 255, .768), 45px 13px 0 -104px rgba(255, 255, 255, .581), 101px 2px 0 -104px rgba(255, 255, 255, .406), 5px 107px 0 -104px rgba(255, 255, 255, .1), 80px -31px 0 -104px rgba(255, 255, 255, .095), 39px 108px 0 -104px rgba(255, 255, 255, .079), -116px 65px 0 -104px rgba(255, 255, 255, .822), -90px -100px 0 -104px rgba(255, 255, 255, .918), -64px 0 0 -104px rgba(255, 255, 255, .459), 71px -53px 0 -104px rgba(255, 255, 255, .541), -36px 82px 0 -104px rgba(255, 255, 255, .969), 31px -31px 0 -104px rgba(255, 255, 255, .216), 41px -1px 0 -104px rgba(255, 255, 255, .458), 44px 87px 0 -104px rgba(255, 255, 255, .253), -82px -107px 0 -104px rgba(255, 255, 255, .057), 72px -16px 0 -104px rgba(255, 255, 255, .559), 43px 72px 0 -104px rgba(255, 255, 255, .164), -22px -35px 0 -104px rgba(255, 255, 255, .572), 15px -121px 0 -104px rgba(255, 255, 255, .719), -42px -2px 0 -104px rgba(255, 255, 255, .251), -107px 90px 0 -104px rgba(255, 255, 255, .254), -109px -114px 0 -104px rgba(255, 255, 255, .071), 20px 74px 0 -104px rgba(255, 255, 255, .807), 86px 142px 0 -104px rgba(255, 255, 255, .368), 6px -69px 0 -104px rgba(255, 255, 255, .465), 44px 32px 0 -104px rgba(255, 255, 255, .707), -23px 54px 0 -104px rgba(255, 255, 255, .222), -44px -130px 0 -104px rgba(255, 255, 255, .255), 112px -87px 0 -104px rgba(255, 255, 255, .862), -3px 129px 0 -104px rgba(255, 255, 255, .546), -136px 77px 0 -104px rgba(255, 255, 255, .892), 63px 119px 0 -104px rgba(255, 255, 255, .483), -76px 16px 0 -104px rgba(255, 255, 255, .866), 66px -8px 0 -104px rgba(255, 255, 255, .579), 91px -84px 0 -104px rgba(255, 255, 255, .36), -73px -53px 0 -104px rgba(255, 255, 255, .509), -75px -140px 0 -104px rgba(255, 255, 255, .867), 92px 131px 0 -104px rgba(255, 255, 255, .113), -21px -27px 0 -104px rgba(255, 255, 255, .381), -118px 72px 0 -104px rgba(255, 255, 255, .398), -4px 79px 0 -104px rgba(255, 255, 255, .671), -116px 29px 0 -104px rgba(255, 255, 255, .285), -106px -34px 0 -104px rgba(255, 255, 255, .298), -30px 31px 0 -104px rgba(255, 255, 255, .79), -9px 100px 0 -104px rgba(255, 255, 255, .104), 13px 121px 0 -104px rgba(255, 255, 255, .027), -43px -26px 0 -104px rgba(255, 255, 255, .484), -27px 144px 0 -104px rgba(255, 255, 255, .705), -22px 137px 0 -104px rgba(255, 255, 255, .893), -26px -104px 0 -104px rgba(255, 255, 255, .975), -42px -74px 0 -104px rgba(255, 255, 255, .207), -102px 42px 0 -104px rgba(255, 255, 255, .98), -9px 17px 0 -104px rgba(255, 255, 255, .363), 30px -113px 0 -104px rgba(255, 255, 255, .004), -43px -124px 0 -104px rgba(255, 255, 255, .281), -139px 115px 0 -104px rgba(255, 255, 255, .214), -87px -3px 0 -104px rgba(255, 255, 255, .502), 41px 109px 0 -104px rgba(255, 255, 255, .252), 129px 3px 0 -104px rgba(255, 255, 255, .046), -105px 56px 0 -104px rgba(255, 255, 255, .431), 62px -128px 0 -104px rgba(255, 255, 255, .716), -65px -36px 0 -104px rgba(255, 255, 255, .822), 127px 107px 0 -104px rgba(255, 255, 255, .231), -141px -30px 0 -104px rgba(255, 255, 255, .323), 31px -49px 0 -104px rgba(255, 255, 255, .862), 98px 49px 0 -104px rgba(255, 255, 255, .865), -120px -37px 0 -104px rgba(255, 255, 255, .685), -88px -77px 0 -104px rgba(255, 255, 255, .371), 145px 84px 0 -104px rgba(255, 255, 255, .883), 15px 107px 0 -104px rgba(255, 255, 255, .818), -121px 61px 0 -104px rgba(255, 255, 255, .038), -28px -83px 0 -104px rgba(255, 255, 255, .488), -81px 120px 0 -104px rgba(255, 255, 255, .508), -100px -83px 0 -104px rgba(255, 255, 255, .216), -115px 12px 0 -104px rgba(255, 255, 255, .759), 40px 12px 0 -104px rgba(255, 255, 255, .832), -121px -37px 0 -104px rgba(255, 255, 255, .069), 108px 142px 0 -104px rgba(255, 255, 255, .258), -20px 50px 0 -104px rgba(255, 255, 255, .256), -144px 145px 0 -104px rgba(255, 255, 255, .646), -48px -130px 0 -104px rgba(255, 255, 255, .714), 40px -76px 0 -104px rgba(255, 255, 255, .983), 124px 75px 0 -104px rgba(255, 255, 255, .365), -34px -84px 0 -104px rgba(255, 255, 255, .198), 33px -136px 0 -104px rgba(255, 255, 255, .359), 27px -52px 0 -104px rgba(255, 255, 255, .287), 50px 70px 0 -104px rgba(255, 255, 255, .134), 45px 33px 0 -104px rgba(255, 255, 255, .618), -3px 7px 0 -104px rgba(255, 255, 255, .855), 60px -90px 0 -104px rgba(255, 255, 255, .287), 25px 60px 0 -104px rgba(255, 255, 255, .09), -44px -83px 0 -104px rgba(255, 255, 255, .616), -113px -65px 0 -104px rgba(255, 255, 255, .026), 17px 62px 0 -104px rgba(255, 255, 255, .186), 88px 92px 0 -104px rgba(255, 255, 255, .366), -60px -46px 0 -104px rgba(255, 255, 255, .584), 105px -129px 0 -104px rgba(255, 255, 255, .448), -127px 78px 0 -104px rgba(255, 255, 255, .869), -3px 142px 0 -104px rgba(255, 255, 255, .931), 15px 127px 0 -104px rgba(255, 255, 255, .538), -105px -39px 0 -104px rgba(255, 255, 255, .168), 54px -94px 0 -104px rgba(255, 255, 255, .173), -123px -72px 0 -104px rgba(255, 255, 255, .517), -73px -12px 0 -104px rgba(255, 255, 255, .537), 40px -3px 0 -104px rgba(255, 255, 255, .566), 23px 39px 0 -104px rgba(255, 255, 255, .386), 63px 46px 0 -104px rgba(255, 255, 255, .366), -13px -137px 0 -104px rgba(255, 255, 255, .405), 38px 91px 0 -104px rgba(255, 255, 255, .236), -93px 29px 0 -104px rgba(255, 255, 255, .533), 129px -30px 0 -104px rgba(255, 255, 255, .577), 122px 133px 0 -104px rgba(255, 255, 255, .308), -101px 132px 0 -104px rgba(255, 255, 255, .868), 126px -82px 0 -104px rgba(255, 255, 255, .125), -1px -117px 0 -104px rgba(255, 255, 255, .559), 36px -131px 0 -104px rgba(255, 255, 255, .24), -84px 40px 0 -104px rgba(255, 255, 255, .782), 39px -32px 0 -104px rgba(255, 255, 255, .482), 43px -84px 0 -104px rgba(255, 255, 255, .265), 130px 24px 0 -104px rgba(255, 255, 255, .459), -81px -93px 0 -104px rgba(255, 255, 255, .718), 8px 9px 0 -104px rgba(255, 255, 255, .027), -8px -118px 0 -104px rgba(255, 255, 255, .613), -107px -123px 0 -104px rgba(255, 255, 255, .141), 71px -143px 0 -104px rgba(255, 255, 255, .171), 72px -127px 0 -104px rgba(255, 255, 255, .265), -72px -52px 0 -104px rgba(255, 255, 255, .822), -42px -73px 0 -104px rgba(255, 255, 255, .904), 140px 105px 0 -104px rgba(255, 255, 255, .148), 129px 144px 0 -104px rgba(255, 255, 255, .685), -30px -57px 0 -104px rgba(255, 255, 255, .845), -39px 69px 0 -104px rgba(255, 255, 255, .764), 80px -38px 0 -104px rgba(255, 255, 255, .386), -133px -41px 0 -104px rgba(255, 255, 255, .627), 125px 129px 0 -104px rgba(255, 255, 255, .39), -12px 129px 0 -104px rgba(255, 255, 255, .839), 102px -46px 0 -104px rgba(255, 255, 255, .575), -143px 136px 0 -104px rgba(255, 255, 255, .776), -101px 91px 0 -104px rgba(255, 255, 255, .512), -30px -34px 0 -104px rgba(255, 255, 255, .754), 19px 79px 0 -104px rgba(255, 255, 255, .822), -4px 112px 0 -104px rgba(255, 255, 255, .522), -1px -50px 0 -104px rgba(255, 255, 255, .19), 102px 39px 0 -104px rgba(255, 255, 255, .123), -79px 119px 0 -104px rgba(255, 255, 255, .977), -5px 73px 0 -104px rgba(255, 255, 255, .624), 13px -87px 0 -104px rgba(255, 255, 255, .392), -1px 110px 0 -104px rgba(255, 255, 255, .137), 60px -100px 0 -104px rgba(255, 255, 255, .17), 100px -81px 0 -104px rgba(255, 255, 255, .02), -124px 123px 0 -104px rgba(255, 255, 255, .642), -30px -85px 0 -104px rgba(255, 255, 255, .881), -46px 100px 0 -104px rgba(255, 255, 255, .99), -9px 62px 0 -104px rgba(255, 255, 255, .024), 90px 130px 0 -104px rgba(255, 255, 255, .298), 117px -28px 0 -104px rgba(255, 255, 255, .206), 45px -10px 0 -104px rgba(255, 255, 255, .201), 67px -130px 0 -104px rgba(255, 255, 255, .806), -68px 25px 0 -104px rgba(255, 255, 255, .775), -59px 140px 0 -104px rgba(255, 255, 255, .2), -101px -34px 0 -104px rgba(255, 255, 255, .344), -77px 28px 0 -104px rgba(255, 255, 255, .036), 142px -105px 0 -104px rgba(255, 255, 255, .557), -96px -49px 0 -104px rgba(255, 255, 255, .423), -69px -123px 0 -104px rgba(255, 255, 255, .328), 34px 62px 0 -104px rgba(255, 255, 255, .16), 127px 0 0 -104px rgba(255, 255, 255, .313), -68px 51px 0 -104px rgba(255, 255, 255, .857), 93px 91px 0 -104px rgba(255, 255, 255, .249), -109px 135px 0 -104px rgba(255, 255, 255, .495), -94px 42px 0 -104px rgba(255, 255, 255, .277), 74px -55px 0 -104px rgba(255, 255, 255, .14), -131px 128px 0 -104px rgba(255, 255, 255, .484), -127px 40px 0 -104px rgba(255, 255, 255, .503), 5px -103px 0 -104px rgba(255, 255, 255, .403), 49px 18px 0 -104px rgba(255, 255, 255, .11), -108px -127px 0 -104px rgba(255, 255, 255, .951), 80px 90px 0 -104px rgba(255, 255, 255, .167), -25px 140px 0 -104px rgba(255, 255, 255, .354), -11px -135px 0 -104px rgba(255, 255, 255, .452), 93px 1px 0 -104px rgba(255, 255, 255, .086), -28px 44px 0 -104px rgba(255, 255, 255, .193), 108px 8px 0 -104px rgba(255, 255, 255, .807), 82px 45px 0 -104px rgba(255, 255, 255, .67), 118px 94px 0 -104px rgba(255, 255, 255, .576), 5px -69px 0 -104px rgba(255, 255, 255, .809), 129px -88px 0 -104px rgba(255, 255, 255, .23), -61px 25px 0 -104px rgba(255, 255, 255, .864), 38px 131px 0 -104px rgba(255, 255, 255, .93), -58px 35px 0 -104px rgba(255, 255, 255, .467), 9px -69px 0 -104px rgba(255, 255, 255, .437), 69px -135px 0 -104px rgba(255, 255, 255, .769), -91px -9px 0 -104px rgba(255, 255, 255, .401), 35px -70px 0 -104px rgba(255, 255, 255, .02), -143px -10px 0 -104px rgba(255, 255, 255, .916), -107px 0 0 -104px rgba(255, 255, 255, .391), -38px 101px 0 -104px rgba(255, 255, 255, .24), -82px -47px 0 -104px rgba(255, 255, 255, .452), 119px 66px 0 -104px rgba(255, 255, 255, .52), 80px -120px 0 -104px rgba(255, 255, 255, .292), 53px 30px 0 -104px rgba(255, 255, 255, .002), -17px 60px 0 -104px rgba(255, 255, 255, .39), 66px -63px 0 -104px rgba(255, 255, 255, .456), -108px 8px 0 -104px rgba(255, 255, 255, .569), 131px 139px 0 -104px rgba(255, 255, 255, .704), 94px -43px 0 -104px rgba(255, 255, 255, .997), 2px 53px 0 -104px rgba(255, 255, 255, .485), 13px -132px 0 -104px rgba(255, 255, 255, .44), -50px -3px 0 -104px rgba(255, 255, 255, .331), 62px -3px 0 -104px rgba(255, 255, 255, .336)
}

.space .pluto {
  height: 780px;
  width: 780px;
  margin-top: -450px;
  margin-left: -320px;
  -webkit-animation: orb 7439.70741s linear infinite;
  animation: orb 7439.70741s linear infinite;
  -webkit-animation-delay: -90s;
  animation-delay: -90s
}

.space .pluto:before {
  height: 3px;
  width: 3px;
  background: #fff;
  margin-top: -1.5px;
  margin-left: -1.5px
}

@-webkit-keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg)
  }
}

@keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg)
  }
}
</style>