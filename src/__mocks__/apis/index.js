/* IMPORTANT: Each key is the union of the domain, method and endpoint of the apis definition. */
export default {
  'backend get getTracks': {
    response: {
      links: {
        previous: null,
        next:
          'https://api.spotify.com/v1/search?query=A&type=track&market=ES&offset=10&limit=10'
      },
      meta: { limit: 10, offset: 0, total: 250009 },
      data: {
        type: 'tracks',
        attributes: {
          items: [
            {
              name: 'A Un Paso De La Luna',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000485111dad34a786082593e21fc23',
                  alt: 'A Un Paso De La Luna'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e0211dad34a786082593e21fc23',
                  alt: 'A Un Paso De La Luna'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b27311dad34a786082593e21fc23',
                  alt: 'A Un Paso De La Luna'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/e5c7e75df9a7b2f5f016b7558768e48b6fb2739b?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'Ana Mena' }, { name: 'Rocco Hunt' }]
            },
            {
              name: 'LA NOCHE DE ANOCHE',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d00004851005ee342f4eef2cc6e8436ab',
                  alt: 'LA NOCHE DE ANOCHE'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab',
                  alt: 'LA NOCHE DE ANOCHE'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab',
                  alt: 'LA NOCHE DE ANOCHE'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/a98b639351290bdb69b865ad10c2e0f5dbe0c4cd?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'Bad Bunny' }, { name: 'ROSALÍA' }]
            },
            {
              name: 'Ayer Me Llamó Mi Ex (feat. Lenny Santos)',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d00004851de5f42ef97a444b422252046',
                  alt: 'Ayer Me Llamó Mi Ex (feat. Lenny Santos)'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e02de5f42ef97a444b422252046',
                  alt: 'Ayer Me Llamó Mi Ex (feat. Lenny Santos)'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b273de5f42ef97a444b422252046',
                  alt: 'Ayer Me Llamó Mi Ex (feat. Lenny Santos)'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/e55d4dbdf5e99be8239ffee31c62b3cfe3d76e54?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'KHEA' }, { name: 'Lenny Santos' }]
            },
            {
              name: 'Ay, DiOs Mío!',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d00004851787fe606ce7ab74559ec541f',
                  alt: 'Ay, DiOs Mío!'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e02787fe606ce7ab74559ec541f',
                  alt: 'Ay, DiOs Mío!'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b273787fe606ce7ab74559ec541f',
                  alt: 'Ay, DiOs Mío!'
                }
              },
              preview: null,
              artists: [{ name: 'KAROL G' }]
            },
            {
              name: 'Qué Le Voy a Hacer',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000485156942b33db81cb30e76265b0',
                  alt: 'Qué Le Voy a Hacer'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e0256942b33db81cb30e76265b0',
                  alt: 'Qué Le Voy a Hacer'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b27356942b33db81cb30e76265b0',
                  alt: 'Qué Le Voy a Hacer'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/1d49375c028d080cf37b8d198e69808aa2056490?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'Skechi' }]
            },
            {
              name: 'Ayer Me Llamó Mi Ex – Remix',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d00004851fe35ab120ab38782a3746873',
                  alt: 'Ayer Me Llamó Mi Ex – Remix'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e02fe35ab120ab38782a3746873',
                  alt: 'Ayer Me Llamó Mi Ex – Remix'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b273fe35ab120ab38782a3746873',
                  alt: 'Ayer Me Llamó Mi Ex – Remix'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/caa42966236417a4830fc08d96cc372b023e90ff?cid=9b58ee941982476fb55ba1143972361c',
              artists: [
                { name: 'KHEA' },
                { name: 'Natti Natasha' },
                { name: 'Prince Royce' },
                { name: 'Lenny Santos' }
              ]
            },
            {
              name: 'YO VISTO ASÍ',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d00004851005ee342f4eef2cc6e8436ab',
                  alt: 'YO VISTO ASÍ'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab',
                  alt: 'YO VISTO ASÍ'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab',
                  alt: 'YO VISTO ASÍ'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/7b32b29728bd3c03d3c21e0540ce549ea24caada?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'Bad Bunny' }]
            },
            {
              name:
                'Agua (with J Balvin) - Music From "Sponge On The Run" Movie',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000485171ea2f5a8d457b18d2bef061',
                  alt:
                    'Agua (with J Balvin) - Music From "Sponge On The Run" Movie'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e0271ea2f5a8d457b18d2bef061',
                  alt:
                    'Agua (with J Balvin) - Music From "Sponge On The Run" Movie'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b27371ea2f5a8d457b18d2bef061',
                  alt:
                    'Agua (with J Balvin) - Music From "Sponge On The Run" Movie'
                }
              },
              preview: null,
              artists: [{ name: 'Tainy' }, { name: 'J Balvin' }]
            },
            {
              name: 'Entre tú y yo',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d00004851613de98d3080e54e1a51c1d2',
                  alt: 'Entre tú y yo'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e02613de98d3080e54e1a51c1d2',
                  alt: 'Entre tú y yo'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b273613de98d3080e54e1a51c1d2',
                  alt: 'Entre tú y yo'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/51e619ba822677fd30786c6eab11397977ff2a58?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'Chema Rivas' }]
            },
            {
              name: 'All I Want for Christmas Is You',
              imgPreviews: {
                small: {
                  src:
                    'https://i.scdn.co/image/ab67616d000048514246e3158421f5abb75abc4f',
                  alt: 'All I Want for Christmas Is You'
                },
                medium: {
                  src:
                    'https://i.scdn.co/image/ab67616d00001e024246e3158421f5abb75abc4f',
                  alt: 'All I Want for Christmas Is You'
                },
                large: {
                  src:
                    'https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f',
                  alt: 'All I Want for Christmas Is You'
                }
              },
              preview:
                'https://p.scdn.co/mp3-preview/bbafd15ff484394a0ca106d5fef0a81eeea4ef5b?cid=9b58ee941982476fb55ba1143972361c',
              artists: [{ name: 'Mariah Carey' }]
            }
          ]
        }
      }
    }
  }
};
