module.exports = ({author, member}) => {
  return({
    user: author,
    userGuildContext: member
  });
}
