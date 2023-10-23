
import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import Logo from '../../assets/todoLogo.svg'
import { styles } from "./styles"
import { Todo } from "../../components/Todo"

type Item = {
    id: string;
    done: boolean;
    task: string;
  };

export default function Home(){

    const [todos, setTodos] = useState<Item[]>([]);
    const [todoText, setTodoText] = useState('')


    function handleTodoAdd() {
        if (!todoText.trim()) {
            return Alert.alert("ToDo inválido","Por favor, informe o conteúdo do seu ToDo");

        }
        if(todos.some((item) => item.task === todoText)){
            return Alert.alert("ToDo existe", "Já existe um ToDo na lista com essa descrição.");
        }
        const newItem: Item = {
            id: Math.random().toString(),
            done: false,
            task: todoText,
        };
        setTodos(prevState => [...prevState, newItem]);
        setTodoText('');
    }

    function handleTodoRemove(id: string){
        Alert.alert("Remover", `Remover a tarefa?`, [
            {
                text: 'Sim',
                onPress: ()=> setTodos(prevState => prevState.filter(todo => todo.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleMarkTodoDone(id: string){
        setTodos(
            (prevItems) => prevItems.map((item) =>item.id === id ? { ...item, done: !item.done } : item)
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo style={styles.logo}/>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTodoText}
                    value={todoText}
                />
                <TouchableOpacity style={styles.button} onPress={ handleTodoAdd }>
                    <Ionicons name="md-add-circle-outline" size={32} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.todosLegens}>
                    <View style={styles.todosCreated}>
                        <Text style={styles.todosTextCreated}> Criadas </Text>
                        <Text style={styles.todosTextLegensNumber}> {todos.filter(item => item.done === false).length} </Text>
                    </View>
                    <View style={styles.todosCompleted}>
                        <Text style={styles.todosTextCompleted}> Concluídas </Text>
                        <Text style={styles.todosTextLegensNumber}> {todos.filter(item => item.done === true).length} </Text>
                    </View>
                </View>
                <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Todo
                        key={item.id}
                        task={item.task}
                        done={item.done}
                        onPress={() => handleMarkTodoDone(item.id)}
                        onRemove={() => handleTodoRemove(item.id)}
                        />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <View style={styles.listEmptyIcon}>
                            <Ionicons name="clipboard-outline" size={56} color="#808080" />
                        </View>
                        <Text style={styles.listEmptyText}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptyText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
            </View>
        </View>
    )
}