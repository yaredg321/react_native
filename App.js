import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback,  ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  
  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const operations = ['+', '-', 'x', '/', '<<x']
  const [opr, setOpr] = useState('')
  
  function numupdator(num){

    setText(text + num.toString())
  } 
  //[a,b] = [1,2] a to 1 b to 2
  const opupdat = op => {
    if(op === '='){
      const [num1, num2] = text.split(opr)//split adrigew op estagen dires
      //split mekifel new ena zmi bilen kesetenew eyanidanidun milikit kesetenew miikit esikalebet
      if(!num1 || !num2) return 
      console.log(num1, num2, (num1 + opr + num2))
      let result = eval(num1 + (opr === 'x' ? '*' : opr) + num2)//eval tochange normal javascript
   
       return setText(result)
    }
    if(op === '<<x') return setText('')
    console.log(text.split(''))

    if(text.split('').includes(op)) return//kefafilina op kagegnh degimehi endayineka adirigi
    numupdator(op)
    setOpr(op)
  }
  return (
       <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
      <View style={styles.screen}>
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.nums}>
        {operations.map(op => (
             <TouchableNativeFeedback onPress={() => opupdat(op)} key={op}>
               {/* map sititekew leye enidanidu kutir new yemiteraw */}
               <View style={styles.op}>
                 <Text style={styles.numText}>{op}</Text>
               </View>
             </TouchableNativeFeedback>
          ))}
        </View>
        <View style={styles.nums}>
          {numbers.map(num => (
             <TouchableNativeFeedback onPress={() => numupdator(num)} key={num}>
               <View style={styles.number}>
                 <Text style={styles.numText}>{num}</Text>
               </View>
             </TouchableNativeFeedback>
          ))}
         
        </View>
        <TouchableNativeFeedback onPress={() => opupdat('=')}>
               <View style={styles.number}>
                 <Text style={styles.numText}>=</Text>
               </View>
             </TouchableNativeFeedback>
      </View>
      </ScrollView>
    </View>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  screen: {
    width: '100%',
    height: 200,
    backgroundColor: '#e8e8e8',
  },
  text: {
    color: '#000',
    fontSize: 25,
    alignSelf: 'flex-end',
    marginTop: 'auto'
  },
  buttons: {
    flex: 1,
    paddingTop: 20
  },
  nums: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center'
  },
  number: {
    padding: 25,
    backgroundColor: '#e8e8e8',
    marginRight: 10,
    marginBottom: 20
  },
  op: {
    padding: 22,
    backgroundColor: 'cyan',
    marginRight: 10,
    marginBottom: 20
  },
  scrollView: {height: '100%'}
});

//jestifay congtante moshi titorial 1:34  //veritical 
//alayin item is secondery ke jestifay contant behiwal yemimeta  //horizontal
//padiing malet ye marigin tekarani new marigin kelay oadding kewist
//flexdirectio malet akitachw wedetach weyim wedegon

//flex 1 malet mulu area enidemalet new
//flexWrap: 'wrap', malet liki enidaleke wedegon ketahi ketil enidemalet new
// minigizam react nativ by defolte enzin yiyizal
// container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  // },
  //fontSize ye minithifew ayinet weyim size

  //react nativ ende react fron mesiriya new backndun ende node be my sql seritahi be axios weyim fache magenagnt ticilaleh









//expo hulunim yemicherisilin new mecheresalay app madiregi sinifelig bulid adirigen si, seten app madireg enichilalen



// init malet initalization new masinesat malet new













// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TouchableNativeFeedback,  ScrollView } from 'react-native';
// //TouchableNativeFeedback sineca enide onclice malet new sineka enidiweta
// // ScrollView malet scrol enidihon yemihyaderg laibreri new wedetach ena wedelayi
// //useState libireriy new yehone neger updat ketederege behiwala yemimeta ||npdat sideregi yemitera
// // split ende mekefafel malet new yakewal yerasu languchi new
// //toString kutirun wede strin lewit
// //return bilo zim malet bado awitalign malet new
// //includes malet ye javascript languche new ena keza ketilo yalew kali kale endemalet new yemiyawedadir 
// //if(text.split('').includes(op)) return malet split weyim botaw bado kehone keza includes awedadir 
// ///alinew keza +-/* weyim (op) kegeba bado hono kehone minim enidatimelis 
// //eval malet ye java script yemitawek new wna stiringun wede kutir lewito yasikemital
// export default function App() {
//   const [text, setText] = useState('')
//   const numbers = [0,1,2,3,4,5,6,7,8,9]
//   const operations = ['+', '-', 'x', '/', '<<x']
//   const [opr, setOpr] = useState('')
//   const setNumber = num => setText(text + num.toString())
//   const setOperation = op => {
//     if(op === '='){
//       const [num1, num2] = text.split(opr)//fu teyikew
//       if(!num1 || !num2) return 
//       console.log(num1, num2, (num1 + opr + num2))//malet num1 sidemer operation sidemet num2// + medemer malet ayidelem enide mayayaza new
//       let result = eval(num1 + (opr === 'x' ? '*' : opr) + num2)//stringun wede number be eval lewetikew keza
//       //num1 + opration + num2 gin opration ke x ekul kehone * keyirew :malet keza opr weyim operation kitetilignkeza num2 asigeba
//       //3 giza === sideregi ekul new == gntinishi adivanitagi ale ke == string ena number minamin sihon
//       //  : otherwise kalebelezi correcte
//       // flex 1 is full scren 0.5 is hafee
//        return setText(result)
//     }
//     if(op === '<<x') return setText('')//op === <<x setText bado adirigew
//     console.log(text.split(''))
//     if(text.split('').includes(op)) return
//     setNumber(op)
//     setOpr(op)
//   }