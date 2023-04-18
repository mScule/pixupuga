# Level grid syntax

Level grid can contain variety of different characters that the LevelReader.ts can understand.
Characters that aren't defined here will cause the level reader to crash.

## Lower level elements

| Character | Meaning               |
| --------- | --------------------- |
| `.`       | Void                  |
| `s`       | Solid ground          |
| `b`       | Box                   |
| `t`       | Trap spikes - Off     |
| `T`       | Trap spikes - On      |
| `r`       | Rock boulder - Sunken |
| `R`       | Rock boulder - Afloat |
| `k`       | Roller - Up - Off     |
| `K`       | Roller - Up - On      |
| `j`       | Roller - Down - Off   |
| `J`       | Roller - Down - On    |
| `h`       | Roller - Left - Off   |
| `H`       | Roller - Left - On    |
| `l`       | Roller - Right - Off  |
| `L`       | Roller - Right - On   |
| `?`       | Hint location         |

## Higher level elements

| Character | Meaning         |
| --------- | --------------- |
| `.`       | Void            |
| `s`       | Solid           |
| `b`       | Box             |
| `r`       | Rock boulder    |
| `p`       | Player          |
| `1`       | Point 1         |
| `5`       | Point 5         |
| `B`       | Collectable box |
