import { Box ,Flex,Text} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Taskcard from '../Components/Taskcard'
import { gettasks } from '../Redux/AppReducer/action'

const Homepage = () => {
  const [searchparams]=useSearchParams()
  const tasks=useSelector((state)=>state.AppReducer.tasks)
  console.log('tasks:', tasks)
  const dispatch=useDispatch()

  const gettaskhsndler=useCallback(()=>{
    dispatch(gettasks())
  },[dispatch])

  useEffect(()=>{
    if(tasks.length===0){
      gettaskhsndler()
    }
  },[gettaskhsndler,tasks.length])

  const filterbyparamstags=(task)=>{
    const paramstags=searchparams.getAll("tags")
    if(paramstags.includes("All") || paramstags.length===0){
      return task
    }

    const data=task.tags.filter((tag)=>{
      if(paramstags.includes(tag)){
        return true
      }
      return false
    })
    console.log(data)
    if(data.length){
      return task
    }
    return false
  }
  return (
    <Box border="1px solid green" width="100%">
      <Flex justifyContent="space-around">
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">Todo</Text>
          </Box>
          {tasks.length>0 && tasks.filter((item)=>item.task_Status==="todo").filter(filterbyparamstags).map((item)=>{
            return <Taskcard key={item.id} {...item} colorScheme={'green'}/>
          })}
        </Box>
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">In-progress</Text>
          </Box>
          {tasks.length>0 && tasks.filter((item)=>item.task_Status==="in-progress").filter(filterbyparamstags).map((item)=>{
            return <Taskcard key={item.id} {...item} colorScheme="yellow"/>
          })}
        </Box>
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">Others</Text>
          </Box>
          {tasks.length>0 && tasks.filter((item)=>item.task_Status==="done").filter(filterbyparamstags).map((item)=>{
            return <Taskcard key={item.id} {...item} colorScheme="blue"/>
          })}
        </Box>
      </Flex>
      
    </Box>
  )
}

export default Homepage