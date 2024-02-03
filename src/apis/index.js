import axios from 'axios'

import { API_ROOT } from '~/utils/constants'

/**
 * Lưu ý: Đối với việc sử dụng axios
 * Tất cả các function bên dưới mình chỉ request và lấy data từ response luôn, mà không có try catch hay then catch gì để bắt lỗi
 * Lí do là vì ở phía Front-end chúng ta không cần thiết làm như vậy đối với mọi request bởi vì
  nó sẽ gây ra việc dư thừa code catch lỗi quá nhiều
 * Giải pháp Clean Code gọn gàng đó là chúng ta sẽ catch lỗi tập trung tại 1 nơi bằng cách tận dụng 1 thứ
  cực kì mạnh mẽ trong axios đó là Interceptors
 * Hiểu đơn giản Interceptors là cách mà chúng ta sẽ đánh chặn vào giữa request hoặc response để xử lí
  logic mà chúng ta muốn
 */

export const fetchBoardDetailAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
  return response.data
}
