export const SetAllPrice = (value, count, currentUser, users, setUser) => {

  if (count > 1) {
    setUser(
      users.map((user) => {
        return user.name === currentUser ? {
          ...user,
          count: user.count + Number(count),
          price: user.price + (value * count)
        } : user
      })
    )
  } else {
    setUser(
      users.map((user) => {
        return user.name === currentUser ? {
          ...user,
          count: user.count + 1,
          price: user.price + value
        } : user
      })
    )
  }
}
