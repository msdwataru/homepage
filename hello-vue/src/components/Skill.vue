<template>
  <div class="skill">
    <h1>Skill</h1>
    <h3>プログラミング経験</h3>
    <table>
      <tr>
        <th>言語</th>
        <th>経験年数</th>
        <!--th>用途</th-->
      </tr>
      <tr>
        <td class="lang" @mouseover="flagC = true" @mouseleave="flagC = false">C言語</td>
        <td>1年</td>
        <!--td>授業、マイコン</td-->
      </tr>
      <tr>
        <td class="lang" @mouseover="flagP = true" @mouseleave="flagP = false">Python</td>
        <td>3年</td>
        <!--td>研究</td-->
      </tr>
      <tr>
        <td class="lang" @mouseover="flagCpp = true" @mouseleave="flagCpp = false">C++</td>
        <td>3ヶ月</td>
        <!--td>協プロ</td-->
      </tr>
      <tr>
        <td class="lang">Javascript</td>
        <td>1週間</td>
        <!--td>趣味、研究</td-->
      </tr>      
    </table>  

    <p></p> 

    <h3>使用用途</h3>

    <div id="clang" v-if="flagC">
      <h4>C言語</h4>
      <img id="clang-img" src="../assets/147.jpg">
      <p>研究室内ロボコンでのマイコン制御</p>
    </div>
    <div id="python" v-if="flagP">
      <h4>Python</h4>
      <img id="python-img" src="../assets/rnn.png">
      <p>研究での機械学習モデルの作成・ロボットの制御</p>
    </div>
    <div id="cpp" v-if="flagCpp">
      <h4>Python</h4>
      <img id="cpp-img" src="../assets/atcoder.png">
      <p>競技プログラミング</p>
    </div>    

  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      flagC: false,
      flagP: false,
      flagCpp: false,
    }
  }
}
</script>

#programing > table > tr:nth-child(1) > th:nth-child(1)

<style scoped>
table{
  margin-left: 2%;
  margin-right: 2%;
  border-collapse: collapse;
  width: 70%;
}
td {
  border: solid 1px;
  border-color: #CCCCCC;
}

#clang-img {
  width: 20%;
}
#python-img {
  width: 50%;
}
#cpp-img {
  width: 35%;
}
.lang {
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.lang:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
