json.partial! 'api/guests/guest'
json.gifts do
  json.array! @guest.gifts, :description, :title
end
