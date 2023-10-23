import { Text, View, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles"

type Props ={
    task: string;
    done: boolean;
    onPress: ()=> void;
    onRemove: ()=> void;
}

export function Todo({task, done, onPress, onRemove}:Props){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                {
                done
                    ? <View style={styles.checkContainer}><Ionicons name="checkmark" size={12} color="#FFF" /></View>
                    : <View ><Ionicons name="radio-button-off" size={24} color="#4EA8DE" /></View>
                }

            </TouchableOpacity>
            <View style={styles.blockName}>
                <Text style={[styles.task, done ? styles.taskDone : {}]}>
                    {task}
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Ionicons name="trash-outline" size={18} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}