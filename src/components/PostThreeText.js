import React from "react";
import { Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const PostOneText = () => {
  return (
    <SafeAreaView style={styles.textWrapper}>
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={{ padding: 25, fontSize: 20 }}>
          ПРОГРАМ ХАНГАМЖИЙН НЭГДҮГЭЭР ҮЕИЙН ТӨГСӨГЧ{"\n"}
          {"\n"}Сургуулиа төгсөөд гурван жил өнгөрчээ. Одоо хаана, ямар ажил
          эрхэлж буйгаа танилцуулахгүй юу?{"\n"}
          {"\n"}- “Procraft Digital Design Agency”-д дизайн спринт мастер,
          төслийн менежерээр ажиллаж байна. Эзэмшсэн мэргэжлээс маань бага зэрэг
          өөр ажил. Дизайн спринт мастер гэсэн мэргэжил Монголд тийм ч танил
          бус, шинэлэг мэргэжилдээ ордог. Хамгийн энгийнээр тайлбарлавал ямар ч
          компанийн шийдэж чадахгүй байгаа, эргэлзээтэй, айдастай байгаа
          төслүүдийг дөрөв хоногийн дотор бодит бүтээгдэхүүн болгон гаргаж,
          зорилтот хэрэглэгчээр нь бүтээгдэхүүнээ туршуулан суралцах, алхам
          алхмаар тодорхойлсон аргачиллыг удирдаж, чиглүүлдэг мэргэжлийг хэлнэ.
          {"\n"}
          {"\n"}Ажлын байр дээр бакалавртаа суралцаж, эзэмшсэн мэдлэгээ хэр
          хэрэглэж чадсан бэ?{"\n"}
          {"\n"}- Миний хувьд сургуульдаа сурсан онолын мэдлэгээ мэдээж
          хэрэглэсэн. Мөн инженер хүний сэтгэлгээг өдөр тутамдаа ашигладаг. Энэ
          нь өдөр тутмын амьдрал болон ажилд маань маш их нөлөө үзүүлдэг. Аливаа
          болохгүй байгаа зүйлийг хүчээр засах гэхээс илүү нарийн ул сууринаас
          нь эхэлж гол асуудал хаана байгааг нь зөв дарааллаар шийдэхийг
          хичээдэг.{"\n"}
          {"\n"}Шинэ Монгол Технологийн дээд сургуулийг сонгосон тань хэр зөв
          шийдвэр байсан бэ?{"\n"}
          {"\n"}- Суралцаж байх хугацаанд маань Идэрээ багш, Ганзориг захирал,
          Байгалмаа багш, Коосений Буянжаргал захирал, болон бусад багш нар
          маань өөрийнхөө хүүхэд шиг л зааж зөвлөж байсанд үнэхээр их талархдаг.
          Зөвхөн хичээл гэхээс илүү хувь хүний хөгжилд тустай зүйлсийг хүртэл
          зааж зөвлөж, тусалж дэмжиж байсан. Хичээл, суралцах арга барил, зөв
          сэтгэлгээ, олон улсын оюутан солилцоо гээд бүгдийг эргээд харахад яах
          аргагүй хамгийн зөв шийдвэр байжээ.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textWrapper: {
    position: "absolute",
    width: "100%",
    height: 380,
    bottom: 10,
    backgroundColor: "#773537",
    opacity: 0.5,
    borderRadius: 25,
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    top: 120,
    backgroundColor: "#fff",
    zIndex: 1000,
    opacity: 1,
    borderRadius: 25,
    marginHorizontal: 20,
    paddingBottom: 150,
  },
});

export default PostOneText;