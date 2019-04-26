<template>
  <div class="skill">
    <h1>Skill</h1>
    <h3>プログラミング経験</h3>
    <table>
      <tr>
        <th>言語</th>
        <th>経験年数</th>
        <th>用途</th>
      </tr>
      <tr>
        <td>C言語</td>
        <td>1年</td>
        <td>授業、マイコン</td>
      </tr>
      <tr>
        <td>Python</td>
        <td>3年</td>
        <td>研究</td>
      </tr>
      <tr>
        <td>C++</td>
        <td>3ヶ月</td>
        <td>協プロ</td>
      </tr>
      <tr>
        <td>Javascript</td>
        <td>1週間</td>
        <td>趣味、研究</td>
      </tr>      
    </table>      
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {

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
  width: 90%;
}
td {
  border: solid 1px;
  border-color: #CCCCCC;
}


</style>
