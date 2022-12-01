import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todosApi";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  return <div>TodoList</div>;
};

export default TodoList;
