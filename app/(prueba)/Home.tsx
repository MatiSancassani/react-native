import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FlatList, Image, Text, View } from "react-native";

interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

// interface ButtonProps {
//   title: string;
//   onPress: () => void;
// }

// const MyButton: React.FC<ButtonProps> = ({ title, onPress }) => {

const Home: React.FC = () => {
  const { data, isLoading } = useQuery<ImageData[]>({
    queryKey: ["getImages"],
    queryFn: () =>
      axios
        .get<ImageData[]>("https://picsum.photos/v2/list?page=2&limit=10")
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  console.log("Data recibida:", data);
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Homee</Text>
      <FlatList<ImageData>
        data={data}
        renderItem={({ item }) => (
          <View>
            <Image
              className="w-[300px] h-[300px]"
              source={{ uri: item.download_url }}
            />
            <Text>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
