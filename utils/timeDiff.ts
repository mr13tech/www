export const getTimeDiff = () => {
  // Get the current date in the user's timezone
  const currentDate = new Date()

  // Get the user's timezone offset in minutes and convert it to hours
  const userTimezoneOffsetHours = currentDate.getTimezoneOffset() / -60

  // Thailand is in timezone UTC+7
  const thailandTimezoneOffsetHours = 7

  // Calculate the difference in hours between user timezone and Thailand timezone
  const timeDifferenceHours =
    thailandTimezoneOffsetHours - userTimezoneOffsetHours

  return timeDifferenceHours
}
