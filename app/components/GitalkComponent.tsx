'use client'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { useEffect } from 'react'
import React from 'react';

interface GitalkComponentProps {
  title: string
  id: string
}

export default function GitalkComponent({ title, id }: GitalkComponentProps) {
  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: 'Ov23liWjZHy4610jHcos',
      clientSecret: 'd232a09391ab3b904a1275e13e62b7a157baea29', 
      repo: 'pyramixed-game-comment',
      owner: 'JasonLee901',
      admin: ['JasonLee901'],
      id: id, // page unique id
      title: title,
      distractionFreeMode: false,
    })

    gitalk.render('gitalk-container')
  }, [])

  return <div id="gitalk-container" />
}
