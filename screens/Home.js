import React from 'react';
import {
  View, Text, StyleSheet, useColorScheme,
  Image, ScrollView, TouchableOpacity, Linking,
} from 'react-native';

// Original images from codebase
const IMG = {
  logo:    'https://www.gov.ls/wp-content/uploads/2022/05/limkokwing.jpeg',
  hero:    'https://www.pula24.co.bw/wp-content/uploads/2022/01/limko-5.jpg',
  design:  'https://tacit-knowledge-architecture.com/wp-content/uploads/2022/10/6-1.jpg',
  collab:  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  campus:  'https://tse2.mm.bing.net/th/id/OIP.zym4M6nsyo0tZwY5-UDuuwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
};

export default function Home() {
  const isDark = useColorScheme() === 'dark';

  const bg   = isDark ? '#0a0f1e' : '#f1f5f9';
  const card = isDark ? '#111827' : '#ffffff';
  const txt  = isDark ? '#f1f5f9' : '#0f172a';
  const sub  = isDark ? '#94a3b8' : '#64748b';
  const bdr  = isDark ? '#1e293b' : '#e2e8f0';

  return (
    <View style={s.screen}>
    <ScrollView
      style={[s.root, { backgroundColor: bg }]}
      contentContainerStyle={s.wrap}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      nestedScrollEnabled={true}
      bounces={true}
    >

      {/* Logo — centered circular badge */}
      <View style={[s.logoRing, { borderColor: '#3b82f6' }]}>
        <View style={[s.logoCircle, { backgroundColor: card }]}>
          <Image source={{ uri: IMG.logo }} style={s.logo} resizeMode="cover" />
        </View>
      </View>
      <View style={[s.badge, { backgroundColor: isDark ? '#1e3a5f' : '#dbeafe' }]}>
        <Text style={[s.badgeTxt, { color: isDark ? '#93c5fd' : '#1d4ed8' }]}>
          🏆 Lesotho's Most Award-Winning Creative University
        </Text>
      </View>
      <Text style={[s.headline, { color: txt }]}>
        BE THE BEST{'\n'}<Text style={s.accent}>LIMKOKWING</Text>{'\n'}GRADUATE
      </Text>

      {/* Hero image */}
      <Image source={{ uri: IMG.hero }} style={s.heroImg} resizeMode="cover" />
      
      {/* Stats */}
      <View style={[s.statsRow, { backgroundColor: card, borderColor: bdr }]}>
        {[['30K+','Students'],['150+','Countries'],['6','Faculties'],['3','Continents']].map(([v, l], i) => (
          <View key={i} style={[s.stat, i < 3 && { borderRightWidth: 1, borderRightColor: bdr }]}>
            <Text style={s.statV}>{v}</Text>
            <Text style={[s.statL, { color: sub }]}>{l}</Text>
          </View>
        ))}
      </View>

      {/* Two campus images side by side */}
      <View style={s.imgRow}>
        <Image source={{ uri: IMG.design }} style={s.halfImg} resizeMode="cover" />
        <Image source={{ uri: IMG.collab }} style={s.halfImg} resizeMode="cover" />
      </View>

      {/* Final campus image */}
      <Image source={{ uri: IMG.campus }} style={[s.heroImg, { marginTop: 24 }]} resizeMode="cover" />

      {/* CTA */}
      <TouchableOpacity style={s.cta}
        onPress={() => Linking.openURL('https://www.limkokwing.com/page/lesotho').catch(console.error)}
        activeOpacity={0.85}>
        <Text style={s.ctaTxt}>Explore Limkokwing University  →</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={[s.footer, { borderTopColor: bdr }]}>
        {['📍 Moshoeshoe Road, Maseru Central · PO Box 8971',
          '📞 80022066 / 80022088 · +266 2231 5767',
          '💙 facebook.com/limkokwing'].map((line, i) => (
          <Text key={i} style={[s.footTxt, { color: sub }]}>{line}</Text>
        ))}
      </View>

    </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  screen:  { flex: 1 },
  root:    { flex: 1 },
  wrap:    { alignItems: 'center', padding: 20, paddingBottom: 60 },

  // Logo — circular badge
  logoRing:   { width: 116, height: 116, borderRadius: 58, borderWidth: 3, alignItems: 'center', justifyContent: 'center', marginTop: 24, marginBottom: 20, shadowColor: '#3b82f6', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.35, shadowRadius: 16, elevation: 8 },
  logoCircle: { width: 104, height: 104, borderRadius: 52, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  logo:       { width: 104, height: 104 },
  badge:    { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, marginBottom: 16 },
  badgeTxt: { fontSize: 12, fontWeight: '700' },
  headline: { fontSize: 38, fontWeight: '900', textAlign: 'center', lineHeight: 46, marginBottom: 20 },
  accent:   { color: '#3b82f6' },

  // Hero
  heroImg: { width: '100%', height: 220, borderRadius: 20, marginBottom: 12 },
  intro:   { fontSize: 13, fontWeight: '600', letterSpacing: 0.5, marginBottom: 20 },

  // Stats
  statsRow: { flexDirection: 'row', width: '100%', borderRadius: 16, borderWidth: 1, marginBottom: 20, overflow: 'hidden' },
  stat:     { flex: 1, alignItems: 'center', paddingVertical: 14 },
  statV:    { fontSize: 18, fontWeight: '900', color: '#3b82f6' },
  statL:    { fontSize: 10, fontWeight: '600', marginTop: 2 },

  // Side-by-side images
  imgRow:  { flexDirection: 'row', gap: 10, width: '100%', marginBottom: 28 },
  halfImg: { flex: 1, height: 160, borderRadius: 16 },

  // Section labels
  secTag:   { fontSize: 11, fontWeight: '700', letterSpacing: 1.3, alignSelf: 'flex-start', marginBottom: 6 },
  secTitle: { fontSize: 24, fontWeight: '800', alignSelf: 'flex-start', marginBottom: 16, lineHeight: 32 },

  // CTA
  cta:    { width: '100%', backgroundColor: '#3b82f6', paddingVertical: 18, borderRadius: 16, alignItems: 'center', marginVertical: 24 },
  ctaTxt: { color: '#fff', fontSize: 16, fontWeight: '800' },

  // Footer
  footer:  { width: '100%', borderTopWidth: 1, paddingTop: 20, gap: 5, alignItems: 'center' },
  footTxt: { fontSize: 13, textAlign: 'center', lineHeight: 20 },
});