import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AppPicker from "./components/AppPicker";
import { PickerItemProps } from './components/AppPicker';

const categories: PickerItemProps[] = [
  {
    label: "Furniture",
    value: 1
  },
  {
    label: "Clothing",
    value: 2
  },
  {
    label: "Cameras",
    value: 3
  }
]


export default function Index() {
  const [category, setCategory] = useState<PickerItemProps | undefined>();

  const handleSelectItem = (item: PickerItemProps) => {
    setCategory(item)
  }

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <AppPicker
        selectedItem={category}
        onSelectItem={handleSelectItem}
        placeholder="Category"
        icon="menu"
        items={categories} />
    </SafeAreaView>
  );
}