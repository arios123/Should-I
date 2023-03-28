import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ChatroomScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [chatroomid, setChatroomid] = useState();


  useEffect(() => {
    const mo = async() => {await setup()}
    mo();
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },{
    //       _id: 3,
    //       text: 'testing',
    //       user: {
    //           _id: 2,
    //           name: 'Name',
    //           avatar: 'https://placeimg.com/140/140/any',
    //       }
    //   }
    // ])
    // const temp = async() => { 
    //   const test = await firestore().collection('users').doc(auth().currentUser.displayName).collection('friends').doc(props.route.params.name).get()
    //   const tempchatroomid = test._data.chatroomid
    //   return (tempchatroomid)
    // }
    //  const tempref = temp()

    const reference = database().ref('/chatrooms/' + props.route.params.cid + '/messages/').on('value', snapshot => { 
      const data = snapshot.val()
      const me = auth().currentUser.displayName

      if(data){
        setMessages([])
      Object.values(data).map((item, index) => {
        setMessages(msg => [...msg, { 
          _id: index,
          text: item.text,
          user:
          {
            _id:
              item.name === me ? 1 : 2
          }
        }]
        )
      }) 
      
    } 

    
  })
    
  return () => database().ref('/chatrooms/' + props.route.params.cid + '/messages/').off('value', reference);


  }, [])


  const setup = async () => {
    const reference = database().ref('/chatrooms/')
    const check = await exists();
    const me = auth().currentUser.displayName;

    if (check) {
      loadMessages();
    } else {
      const temp = reference.push({
        userone: me,
        usertwo: props.route.params.name,
        messages: []
      })

      await firestore().collection('users').doc(me).collection('friends').doc(props.route.params.name).update({
        chatroomid: temp.key
      })

      await firestore().collection('users').doc(props.route.params.name).collection('friends').doc(me).update({
        chatroomid: temp.key
      })

    }
  }

  const loadMessages = async () => {
    // const temp = await firestore().collection('users').doc(auth().currentUser.displayName).collection('friends').doc(props.route.params.name).get()
    // const tempchatroomid = temp._data.chatroomid
    // setChatroomid(tempchatroomid)

    const check = await msgExists(props.route.params.cid)

    if (!check) { } else {
      // renderMessages(props.route.params.cid);
    }
  }

  const renderMessages = async (props) => {
    const me = auth().currentUser.displayName
    await database().ref('/chatrooms/' + props + '/messages/').once('value').then(snapshot => {
      Object.values(snapshot.val()).map((item, index) => {
        setMessages(msg => [...msg, {
          _id: index,
          text: item.text,
          user: {
            _id:
              msg.name === me ? 1 : 2
          }
        }]
        )
      })

    })

    // return () => database().ref('/chatrooms/' + props + '/messages/').off('value', reference);

    // temporary.map(item => console.log(item)) 
    // console.log(temp)

    // console.log(reference.val())
  }

  const msgExists = async (props) => {
    const reference = await database().ref('/chatrooms/' + props).once('value')
    return (reference.val().messages)
  }

  const exists = async () => {
    const testing = await firestore().collection('users').doc(auth().currentUser.displayName).collection('friends').doc(props.route.params.name).get()
    return (testing._data.chatroomid)
  }

  const updateMsg = async (msg) => {
    const { _id, text, user } = msg
    const me = auth().currentUser.displayName
    database().ref('/chatrooms/' + props.route.params.cid + '/messages/').push({
      _id,
      createdAt: new Date(),
      name: me,
      text,
      user
    })
  }

  const onSend = useCallback((msg = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
    updateMsg(msg[0]);
  }, [])

  return (
    <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{ _id: 1, }} />
  );
}

export default ChatroomScreen;