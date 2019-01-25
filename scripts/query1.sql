Select top 300 id, acceptedanswerid, score
from Posts
where Tags like '%<javascript>%'
and (body like '%sort%'
or body like '%function%'
or body like '%algorithm%'
or body like '%code%'
or body like '%solution%'
or body like '%script%'
or body like '%program%')
order by score desc